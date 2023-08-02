<script setup lang="ts">
import TempLayout from '@/components/TempLayout.vue'
import AreaChart from '@/components/AreaChart.vue'
import DonutChart from '@/components/DonutChart.vue'
import lastOrders from '@/mocks/lastOrdersMock'
import { generateSalesDataForYearAndHalf } from '@/utils/generateData'

import { VDataTable } from 'vuetify/labs/VDataTable'

const series = [
  {
    name: 'Sales',
    data: generateSalesDataForYearAndHalf()
  },
  {
    name: 'Sales 2',
    data: generateSalesDataForYearAndHalf()
  }
]

interface IOrderItem {
  customer: string
  order: string
  deliveryDate: string
  deliveryPricing: string
  deliveryStatus: string
  payment: string
}

const headers = lastOrders.headers
const orders = lastOrders.orders as IOrderItem[]
</script>

<template>
  <TempLayout>
    <h1 class="page-title">Dashboard</h1>
    <div class="cards">
      <div class="card card--blue">
        <span class="card__icon card__icon--blue"><v-icon size="1.6rem">mdi-heart</v-icon></span>
        <div class="card__body">
          <span>178+</span>
          <p>Save products</p>
        </div>
      </div>
      <div class="card card--cyan">
        <span class="card__icon card__icon--cyan"><v-icon size="2rem">mdi-account</v-icon></span>
        <div class="card__body">
          <span>178+</span>
          <p>Total users</p>
        </div>
      </div>
      <div class="card card--red">
        <span class="card__icon card__icon--red"
          ><v-icon size="2rem">mdi-package-variant-closed-check</v-icon></span
        >
        <div class="card__body">
          <span>178+</span>
          <p>Total sales</p>
        </div>
      </div>
      <div class="card card--orange">
        <span class="card__icon card__icon--orange"
          ><v-icon size="1.7rem">mdi-list-box</v-icon></span
        >
        <div class="card__body">
          <span>178+</span>
          <p>Total products</p>
        </div>
      </div>
    </div>
    <section class="charts">
      <div class="charts__dashboard">
        <div class="charts__dashboard__info">
          <h2>Overview</h2>
          <div class="charts__dashboard__text">
            <span>$64.868,96</span>
            <p>Current Month Earnings</p>
          </div>
          <div class="charts__dashboard__text">
            <span>44</span>
            <p>Current Month Sales</p>
          </div>
        </div>
        <div class="charts__dashboard__chart">
          <AreaChart :series="series"></AreaChart>
        </div>
      </div>
      <div class="charts__donut">
        <h2>Analytics</h2>
        <DonutChart></DonutChart>
      </div>
    </section>
    <section class="last-orders">
      <h2>Last orders</h2>
      <v-data-table :headers="headers" :items="orders" items-per-page="5" height="320">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.columns.customer }}</td>
            <td>{{ item.columns.order }}</td>
            <td>{{ item.columns.deliveryDate }}</td>
            <td>{{ item.columns.deliveryPricing }}</td>
            <td>
              <span
                :class="[
                  'order__status',
                  {
                    'order__status--completed': item.columns.deliveryStatus === 'Complete',
                    'order__status--pending': item.columns.deliveryStatus === 'Pending',
                    'order__status--canceled': item.columns.deliveryStatus === 'Canceled'
                  }
                ]"
                >{{ item.columns.deliveryStatus }}</span
              >
            </td>
            <td>{{ item.columns.payment }}</td>
          </tr>
        </template>
      </v-data-table>
    </section>
  </TempLayout>
</template>

<style scoped>
.page-title {
  font-weight: bold;
  font-size: 1.3rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  color: white;
  margin-top: 1rem;
}

.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(61, 61, 61, 0.3);
}

.card--blue {
  background: linear-gradient(to right, var(--blue-800) 0%, var(--blue-100) 100%);
}
.card--cyan {
  background: linear-gradient(to right, var(--cyan-800) 0%, var(--cyan-100) 100%);
}
.card--red {
  background: linear-gradient(to right, var(--red-800) 0%, var(--red-100) 100%);
}
.card--orange {
  background: linear-gradient(to right, var(--orange-800) 0%, var(--orange-100) 100%);
}

.card__icon {
  background-color: red;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__icon--blue {
  background-color: var(--blue-100);
}
.card__icon--cyan {
  background-color: var(--cyan-100);
}
.card__icon--red {
  background-color: var(--red-100);
}
.card__icon--orange {
  background-color: var(--orange-100);
}

.card__body span {
  font-weight: bold;
  font-size: 1.4rem;
}

.card__body p {
  font-size: 1.1rem;
}

.charts {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
}

.charts > div {
  box-shadow: 0px 4px 8px rgba(61, 61, 61, 0.3);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.charts > .charts__dashboard {
  display: grid;
  grid-template-columns: 3fr 10fr;
}

.charts__dashboard__text {
  margin-top: 2rem;
  color: #444444;
}
.charts__dashboard__text > span {
  font-size: 1.8rem;
  font-weight: 600;
}

.v-data-table th .v-data-table-header__content {
  justify-content: center;
}
.last-orders {
  margin-top: 4rem;
  box-shadow: 0px 4px 8px rgba(61, 61, 61, 0.3);
  border-radius: 8px;
  padding: 1rem;
}

.order__status {
  border-radius: 4px;
  padding: 2px 8px 4px 8px;
  font-weight: 600;
}

.order__status--completed {
  background-color: rgb(191, 245, 227);
  color: green;
}
.order__status--pending {
  background-color: rgb(255, 240, 212);
  color: rgb(255, 115, 0);
}
.order__status--canceled {
  background-color: rgb(255, 219, 219);
  color: red;
}

@media (max-width: 900px) {
  .charts {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .card {
    flex-direction: column;
    text-align: center;
  }

  .charts > .charts__dashboard {
    grid-template-columns: 1fr;
  }

  .charts__dashboard__chart {
    padding: 4px 0px;
  }

  .charts__dashboard__text {
    margin-top: 1rem;
  }
}
</style>
