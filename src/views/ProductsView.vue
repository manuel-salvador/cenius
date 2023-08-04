<script setup lang="ts">
import { ref, watch } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

import type { IProduct } from '@/types'
import TempLayout from '@/components/TempLayout.vue'
import { headers, products as ProductsMock } from '@/mocks/products.json'

const products = ref<IProduct[]>([])
const dialog = ref(false)
const dialogDisable = ref(false)
const dialogActivate = ref(false)
const editedIndex = ref(-1)
const defaultItem = {
  id: -1,
  name: '',
  price: 0,
  category: '',
  stock: 0,
  subcategories: [''],
  mainImage: '',
  description: '',
  disabled: false
}
const editedItem = ref(defaultItem)

const formTitle = ref(editedIndex.value === -1 ? 'New Item' : 'Edit Item')

watch(editedIndex, (newValue) => {
  formTitle.value = newValue === -1 ? 'New Item' : 'Edit Item'
})

function resetDialog() {
  editedItem.value = { ...defaultItem }
  editedIndex.value = -1
}

function close() {
  resetDialog()
  dialog.value = false
}

function closeDisable() {
  resetDialog()
  dialogDisable.value = false
}

function closeActivate() {
  resetDialog()
  dialogActivate.value = false
}

function showDialog(item: IProduct | null = null) {
  if (item) {
    editedIndex.value = products.value.indexOf(item)
    editedItem.value = { ...item }
  } else {
    editedItem.value = { ...defaultItem }
  }
}

function editItem(item: IProduct) {
  showDialog(item)
  dialog.value = true
}

function disableItem(item: IProduct) {
  showDialog(item)
  dialogDisable.value = true
}

function activateItem(item: IProduct) {
  showDialog(item)
  dialogActivate.value = true
}

function save() {
  if (editedIndex.value > -1) {
    Object.assign(products.value[editedIndex.value], editedItem.value)
  } else {
    editedItem.value.id = products.value.length
    products.value.push(editedItem.value)
  }
  close()
}

function disableItemConfirm() {
  products.value[editedIndex.value].disabled = true
  closeDisable()
}

function activateItemConfirm() {
  products.value[editedIndex.value].disabled = false
  closeActivate()
}

const search = ref('')

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function customFilter(value: string | number, query: string, item: IProduct) {
  const normalizedQuery = removeAccents(query.toLowerCase())
  const normalizedCategory = removeAccents(item.category.toLowerCase())
  const normalizedName = removeAccents(item.name.toLowerCase())

  return (
    value != null &&
    normalizedQuery != null &&
    typeof value === 'string' &&
    (normalizedCategory.includes(normalizedQuery) || normalizedName.includes(normalizedQuery))
  )
}

const loading = ref(true)

function loadItems() {
  setTimeout(() => {
    products.value = ProductsMock
    loading.value = false
  }, 3000)
}

const loadingSubmit = ref(false)

async function onSubmit() {
  loadingSubmit.value = true

  setTimeout(() => {
    loadingSubmit.value = false
    console.log({ ...editedItem.value })
    save()
  }, 2000)
}

function onChangeSubcategories(e: Event) {
  const target = e.target as HTMLInputElement
  const modifiedValue = target.value.split(',').map((subcategory) => subcategory.trim())
  editedItem.value.subcategories = modifiedValue
}

const isRequired = (value: string) => {
  if (value) return true

  return 'Field is required.'
}

const formRules = {
  name: [isRequired],
  price: [isRequired],
  stock: [isRequired],
  category: [isRequired],
  subcategories: [isRequired],
  description: [
    isRequired,
    (value: string) => (value && value.length <= 200) || 'Max. 200 characters'
  ],
  mainImage: [isRequired]
}

const isFormValid = ref(false)
</script>

<template>
  <TempLayout>
    <h3 class="page-title">Products</h3>
    <v-data-table
      :custom-filter="customFilter"
      :headers="headers"
      :items="products"
      :items-per-page="10"
      class="elevation-1"
      :search="search"
      :loading="loading"
      no-data-text="No products available"
      @update:options="loadItems"
    >
      <template v-slot:top>
        <v-toolbar class="toolbar">
          <v-text-field
            v-model="search"
            append-inner-icon="mdi-magnify"
            label="Search by Name or Category"
            hide-details
            clearable
            variant="underlined"
            density="compact"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props" prepend-icon="mdi-plus"> New Item </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="form__title">{{ formTitle }}</span>
              </v-card-title>

              <v-form @submit.prevent="onSubmit" v-model="isFormValid">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="8">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Product name"
                          :rules="formRules.name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" md="2">
                        <v-text-field
                          v-model="editedItem.price"
                          label="Price"
                          prefix="$"
                          type="number"
                          :rules="formRules.price"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" md="2">
                        <v-text-field
                          v-model="editedItem.stock"
                          label="Stock"
                          suffix="u."
                          type="number"
                          :rules="formRules.stock"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="5">
                        <v-text-field
                          v-model="editedItem.category"
                          label="Category"
                          :rules="formRules.category"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="7">
                        <v-text-field
                          :model-value="editedItem.subcategories"
                          @input="onChangeSubcategories"
                          label="Subcategories"
                          hint="Separate by commas e.g. Clothes, Man, Sport"
                          persistent-hint
                          :rules="formRules.subcategories"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="editedItem.description"
                          label="Description"
                          :counter="200"
                          :rules="formRules.description"
                        ></v-textarea>
                      </v-col>

                      <v-col cols="12">
                        <div class="modal__product-image">
                          <v-img
                            :src="editedItem.mainImage"
                            cover
                            aspect-ratio="1/1"
                            max-width="200"
                          ></v-img>
                          <v-text-field
                            v-model="editedItem.mainImage"
                            label="Main image (URL)"
                          ></v-text-field>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="close" v-if="!loadingSubmit">
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    type="submit"
                    :loading="loadingSubmit"
                    :disabled="!isFormValid"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDisable" max-width="500px">
            <v-card>
              <span class="modal__confirm__text">Are you sure you want to disable this item?</span>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDisable">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="disableItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogActivate" max-width="500px">
            <v-card>
              <span class="modal__confirm__text">Are you sure you want to activate this item?</span>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeActivate">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="activateItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:[`item.mainImage`]="{ item }">
        <v-img :src="item.columns.mainImage" cover aspect-ratio="1/1"></v-img>
      </template>

      <template v-slot:[`item.name`]="{ item }">
        <p class="table__cell-name">{{ item.columns.name }}</p>
      </template>

      <template v-slot:[`item.disabled`]="{ item }">
        <v-chip :color="item.columns.disabled ? 'red' : 'green'">
          {{ item.columns.disabled ? 'Disabled' : 'Active' }}
        </v-chip>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-btn @click="editItem(item.raw)" icon="" flat class="button__action--edit">
          <v-icon>mdi-pencil</v-icon>
          <v-tooltip activator="parent" location="bottom">Edit</v-tooltip></v-btn
        >
        <v-btn @click="disableItem(item.raw)" icon="" flat v-if="!item.columns.disabled">
          <v-icon>mdi-cancel</v-icon>
          <v-tooltip activator="parent" location="bottom">Disable</v-tooltip></v-btn
        >
        <v-btn @click="activateItem(item.raw)" icon="" flat v-else>
          <v-icon>mdi-refresh</v-icon>
          <v-tooltip activator="parent" location="bottom">Activate</v-tooltip></v-btn
        >
      </template>
    </v-data-table>
  </TempLayout>
</template>

<style scoped>
.page-title {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
}

.toolbar {
  background-color: white;
  padding-left: 20px;
  padding-top: 8px;
}

.form__title {
  font-size: 1.5rem;
  font-weight: 400;
}

.table__cell-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.modal__product-image {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.modal__product-image .v-img {
  border: 1px solid rgb(165, 165, 165);
}

.modal__confirm__text {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin-top: 12px;
}

.button__action--edit {
  margin: 0px 4px;
}

@media (max-width: 768px) {
  .modal__product-image {
    flex-direction: column;
    align-items: normal;
  }
  .modal__product-image .v-img {
    width: 200px;
    height: 200px;
    align-self: center;
  }
}
</style>
