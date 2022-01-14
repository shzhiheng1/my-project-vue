<template>
  <div>
    <div style="width: 100%; min-height: 200px;max-height: 400px;">
      <Bar :data="datacollection"></Bar>
    </div>
    <div style="width: 100%; min-height: 200px;max-height: 400px;">
      <Lines :data="datacollection"></Lines>
    </div>
    <div style="width: 100%; min-height: 200px;max-height: 400px;">
      <Pie :data="pieData"></Pie>
    </div>
    <div style="width: 100%; min-height: 200px;max-height: 400px;">
      <Doughnut :data="pieData"></Doughnut>
    </div>
     <div style="width: 100%; min-height: 200px; max-height: 400px;">
      <Scatter :data="ScatterData"></Scatter>
    </div>
    <div style="width: 100%; min-height: 200px; max-height: 400px;">
      <HorizontalBar :data="datacollection"></HorizontalBar>
    </div>
    <div style="width: 100%; min-height: 200px; max-height: 400px;">
      <Radar :data="RadarData"></Radar>
    </div>
  </div>
</template>

<script>
import Bar from "@c/charts/BarChart.vue";
import Lines from "@c/charts/LineCart.vue";
import Pie from "@c/charts/PieChart";
import Doughnut from '@c/charts/DoughnutChart';
import Scatter from '@c/charts/ScatterChart';
import HorizontalBar from '@c/charts/HorizontalBarChart';
import Radar from "@c/charts/RadarChart";
  export default {
  data() {
    return {
      datacollection: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "rgba(0,193,222,.6)",
            hoverBackgroundColor: "rgba(0,193,222,.8)",
            data: [-4, 40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      } ,//endData
      pieData:{
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 20, 80, 10]
          }
        ]
      },
      ScatterData:{
        datasets: [
          {
            label: 'Scatter Dataset 1',
            fill: false,
            borderColor: '#f87979',
            backgroundColor: '#f87979',
            data: [{
              x: -2,
              y: 4
            }, {
              x: -1,
              y: 1
            }, {
              x: 0,
              y: 0
            }, {
              x: 1,
              y: 1
            }, {
              x: 2,
              y: 4
            }]
         },
         {
            label: 'Scatter Dataset 2',
            fill: false,
            borderColor: '#7acbf9',
            backgroundColor: '#7acbf9',
            data: [{
              x: -2,
              y: -4
            }, {
              x: -1,
              y: -1
            }, {
              x: 0,
              y: 1
            }, {
              x: 1,
              y: -1
            }, {
              x: 2,
              y: -4
            }]
          }
        ]
      },
      RadarData:{
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {},
  components: {
    Bar,
    Lines,
    Pie,
    Doughnut,
    Scatter,
    HorizontalBar,
    Radar
  }
};
    
</script>

<style scoped>

</style>

