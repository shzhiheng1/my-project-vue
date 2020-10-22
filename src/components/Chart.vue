<template>
  <div>
    <div style="width: 100%; height: 500px;">
      <Bar :data="datacollection"></Bar>
    </div>
  </div>
</template>

<script>
import Bar from "../public/BarChart.vue";
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
      } //endData
    };
  },
  mounted() {},
  methods: {},
  components: {
    Bar
  }
};
    
</script>

<style scoped>

</style>

