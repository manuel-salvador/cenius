<script setup lang="ts">
import { ref } from 'vue'

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

const generateDataForYearAndHalf = () => {
  const startDate = new Date('2022-01-01').getTime()
  const endDate = new Date().getTime()
  const dayMilliseconds = 24 * 60 * 60 * 1000
  const data = []

  for (let date = startDate; date <= endDate; date += dayMilliseconds) {
    const value = Math.floor(Math.random() * 11) + 0

    data.push([date, value])
  }

  return data
}

const series = [
  {
    name: 'Sales',
    data: generateDataForYearAndHalf()
  },
  {
    name: 'Sales 2',
    data: generateDataForYearAndHalf()
  }
]

let selection = ref('one_month')

function updateData(timeline: string) {
  selection.value = timeline

  if (!chart.value) {
    return
  }

  const today = new Date().getTime()
  let startOfYear // Movemos la declaración fuera del bloque 'case'

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
    case 'ytd':
      startOfYear = new Date(today).getFullYear() // Asignamos el valor aquí
      chart.value.zoomX(new Date(startOfYear, 0, 1).getTime(), today)
      break
    case 'all':
      chart.value.zoomX(new Date('2022-01-01').getTime(), today)
      break
    default:
  }
}
</script>

<template>
  <div id="area-chart">
    <div class="toolbar">
      <button
        id="one_month"
        @click="updateData('one_month')"
        :class="{ active: selection === 'one_month' }"
      >
        1M
      </button>

      <button
        id="six_months"
        @click="updateData('six_months')"
        :class="{ active: selection === 'six_months' }"
      >
        6M
      </button>

      <button
        id="one_year"
        @click="updateData('one_year')"
        :class="{ active: selection === 'one_year' }"
      >
        1Y
      </button>

      <button id="ytd" @click="updateData('ytd')" :class="{ active: selection === 'ytd' }">
        YTD
      </button>

      <button id="all" @click="updateData('all')" :class="{ active: selection === 'all' }">
        ALL
      </button>
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
</style>
