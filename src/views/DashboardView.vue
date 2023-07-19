<script lang="ts">
import TempLayout from '@/components/TempLayout.vue'
import AreaChart from '@/components/AreaChart.vue'
import DonutChart from '@/components/DonutChart.vue'

import { VDataTable } from 'vuetify/labs/VDataTable'

interface IOrderItem {
  customer: string
  order: string
  deliveryDate: string
  deliveryPricing: string
  deliveryStatus: string
  payment: string
}

const tableData = {
  headers: [
    { title: 'Customer', key: 'customer' },
    { title: 'Order', key: 'order' },
    { title: 'Delivery Date', key: 'deliveryDate' },
    { title: 'Delivery Pricing', key: 'deliveryPricing' },
    { title: 'Delivery Status', key: 'deliveryStatus' },
    { title: 'Payment', key: 'payment' }
  ],
  orders: [
    {
      customer: 'John Doe',
      order: 'Pantalones',
      deliveryDate: '2023-07-21',
      deliveryPricing: '$12.99',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'Jane Smith',
      order: 'Camisas',
      deliveryDate: '2023-07-22',
      deliveryPricing: 'Free',
      deliveryStatus: 'Pending',
      payment: 'Transfer'
    },
    {
      customer: 'Mike Johnson',
      order: 'Gorras',
      deliveryDate: '2023-07-23',
      deliveryPricing: '$8.50',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'Alice Williams',
      order: 'Vestidos',
      deliveryDate: '2023-07-24',
      deliveryPricing: '$9.99',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'Bob Anderson',
      order: 'Zapatos',
      deliveryDate: '2023-07-25',
      deliveryPricing: '$15.00',
      deliveryStatus: 'Pending',
      payment: 'Transfer'
    },
    {
      customer: 'Eva Martinez',
      order: 'Bolsos',
      deliveryDate: '2023-07-26',
      deliveryPricing: '$7.50',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'David Lee',
      order: 'Sombreros',
      deliveryDate: '2023-07-27',
      deliveryPricing: '$6.99',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'Sophia Kim',
      order: 'Sweaters',
      deliveryDate: '2023-07-28',
      deliveryPricing: '$11.50',
      deliveryStatus: 'Pending',
      payment: 'Transfer'
    },
    {
      customer: 'Michael Brown',
      order: 'Chaqueta',
      deliveryDate: '2023-07-29',
      deliveryPricing: '$14.75',
      deliveryStatus: 'Canceled',
      payment: 'Credit Card'
    },
    {
      customer: 'Olivia Davis',
      order: 'Pantalones cortos',
      deliveryDate: '2023-07-30',
      deliveryPricing: '$8.25',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'William Wilson',
      order: 'Bufandas',
      deliveryDate: '2023-07-31',
      deliveryPricing: '$5.00',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'Ava Taylor',
      order: 'Faldas',
      deliveryDate: '2023-08-01',
      deliveryPricing: '$10.00',
      deliveryStatus: 'Pending',
      payment: 'Transfer'
    },
    {
      customer: 'James Johnson',
      order: 'Corbatas',
      deliveryDate: '2023-08-02',
      deliveryPricing: '$6.50',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'Emma Martin',
      order: 'Calcetines',
      deliveryDate: '2023-08-03',
      deliveryPricing: '$3.99',
      deliveryStatus: 'Canceled',
      payment: 'Credit Card'
    },
    {
      customer: 'Alexander Martinez',
      order: 'Gafas',
      deliveryDate: '2023-08-04',
      deliveryPricing: '$9.50',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    },
    {
      customer: 'Charlotte Thompson',
      order: 'Camisetas',
      deliveryDate: '2023-08-05',
      deliveryPricing: 'Free',
      deliveryStatus: 'Pending',
      payment: 'Transfer'
    },
    {
      customer: 'Daniel Hall',
      order: 'Sandalias',
      deliveryDate: '2023-08-06',
      deliveryPricing: '$12.00',
      deliveryStatus: 'Complete',
      payment: 'Credit Card'
    }
  ] as IOrderItem[]
}

export default {
  components: {
    TempLayout,
    AreaChart,
    DonutChart,
    VDataTable
  },
  data: () => ({
    headers: tableData.headers,
    orders: tableData.orders as IOrderItem[]
  })
}
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
        <AreaChart></AreaChart>
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

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .card {
    flex-direction: column;
    text-align: center;
  }
  .charts {
    grid-template-columns: 1fr;
  }

  .charts > .charts__dashboard {
    grid-template-columns: 1fr;
  }

  .charts__dashboard__text {
    margin-top: 1rem;
  }
}
</style>
