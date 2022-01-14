<script>
  import {Doughnut } from 'vue-chartjs'
  // 环状图
  export default {
    extends: Doughnut ,
    props:['data'],
    mounted(){
      this.renderChart(this.data,{responsive: true, maintainAspectRatio: false} )
    }
  }
</script>