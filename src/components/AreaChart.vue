<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  series: Array
})

interface ApexChart {
  zoomX: (x: number, y: number) => void
}

const chart = ref<ApexChart | null>(null)

const today = new Date()
const oneMonthAgo = new Date(today)
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

const options = {
  colors: ['#eb8117', '#b650fa'],
  chart: {
    id: 'area-datetime',
    height: 350,
    type: 'area',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    min: oneMonthAgo.getTime(),
    tickAmount: 8
  },
  tooltip: {
    x: {
      enabled: false
    }
  },
  legend: {
    position: 'top',
    markers: {
      radius: 3
    }
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 250,
          toolbar: {
            show: false
          }
        }
      }
    }
  ]
}

let selection = ref('one_month')

function updateChartTimeline(timeline: string) {
  selection.value = timeline

  if (!chart.value) {
    return
  }

  const today = new Date().getTime()
  let startOfYear

  switch (timeline) {
    case 'one_month':
      chart.value.zoomX(today - 30 * 24 * 60 * 60 * 1000, today)
      break
    case 'six_months':
      chart.value.zoomX(today - 6 * 30 * 24 * 60 * 60 * 1000, today)
      break
    case 'one_year':
      chart.value.zoomX(today - 365 * 24 * 60 * 60 * 1000, today)
      break
    case 'year_to_date':
      startOfYear = new Date(today).getFullYear()
      chart.value.zoomX(new Date(startOfYear, 0, 1).getTime(), today)
      break
    case 'all_time':
      chart.value.zoomX(new Date('2022-01-01').getTime(), today)
      break
    default:
  }
}
</script>

<template>
  <div id="area-chart">
    <div class="toolbar">
      <v-btn
        id="one_month"
        @click="updateChartTimeline('one_month')"
        :class="{ active: selection === 'one_month' }"
        variant="text"
      >
        1M
        <v-tooltip activator="parent" location="top">1 Month</v-tooltip>
      </v-btn>

      <v-btn
        id="six_months"
        @click="updateChartTimeline('six_months')"
        :class="{ active: selection === 'six_months' }"
        variant="text"
      >
        6M
        <v-tooltip activator="parent" location="top">6 Months</v-tooltip>
      </v-btn>

      <v-btn
        id="one_year"
        @click="updateChartTimeline('one_year')"
        :class="{ active: selection === 'one_year' }"
        variant="text"
      >
        1Y
        <v-tooltip activator="parent" location="top">One Year</v-tooltip>
      </v-btn>

      <v-btn
        id="year_to_date"
        @click="updateChartTimeline('year_to_date')"
        :class="{ active: selection === 'year_to_date' }"
        variant="text"
      >
        YTD
        <v-tooltip activator="parent" location="top">Year to date</v-tooltip>
      </v-btn>

      <v-btn
        id="all_time"
        @click="updateChartTimeline('all_time')"
        :class="{ active: selection === 'all_time' }"
        variant="text"
      >
        ALL
        <v-tooltip activator="parent" location="top">All time</v-tooltip>
      </v-btn>
    </div>
    <apexchart type="area" height="350" ref="chart" :options="options" :series="series"></apexchart>
  </div>
</template>

<style>
.toolbar {
  display: flex;
  gap: 8px;
  color: #444444;
}

.toolbar button {
  border: 2px solid transparent;
  transition: all 0.3s ease;
  font-weight: bold;
  padding: 0 0.5rem;
  border-radius: 4px;
}

.toolbar .active {
  color: var(--blue-800);
  border: 2px solid var(--blue-800);
}

.v-tooltip.v-overlay > .v-overlay__content {
  background-color: #111013;
}

@media (max-width: 768px) {
  .toolbar {
    justify-content: center;
  }
}

@media (max-width: 425px) {
  .toolbar #year_to_date {
    display: none;
  }
}
</style>
