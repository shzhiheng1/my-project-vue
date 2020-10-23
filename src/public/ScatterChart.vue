<script>
  import {Scatter} from 'vue-chartjs' //散点坐标图
  export default {
    extends: Scatter,
    props:['data'],
    mounted(){
      this.renderChart(this.data,{responsive: true, maintainAspectRatio: false} )
    }
  }
</script>