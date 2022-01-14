<script>
  import {Pie} from 'vue-chartjs' //饼状图
  export default {
    extends: Pie,
    props:['data'],
    mounted(){
      this.renderChart(this.data,{responsive: true, maintainAspectRatio: false} )
    }
  }
</script>