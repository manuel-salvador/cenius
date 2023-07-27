<script setup lang="ts">
const options = {
  chart: {
    id: 'donut-numbers',
    type: 'donut'
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      opacity: 0.9
    }
  },
  fill: {
    type: 'gradient'
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: 16,
    markers: {
      radius: 3
    },
    formatter: function (val: string, opts: any) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
    }
  },
  labels: ['Sale', 'Distribute', 'Return'],
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 450
        },
        legend: {
          fontSize: 20,
          itemMargin: {
            horizontal: 30,
            vertical: 3
          }
        },
        dataLabels: {
          style: {
            fontSize: 16
          }
        }
      }
    }
  ]
}

const series = [44, 4, 20]
</script>

<template>
  <div id="donut-chart">
    <apexchart
      type="donut"
      height="380"
      width="100%"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
