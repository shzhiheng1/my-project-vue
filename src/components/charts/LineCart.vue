<script>
  import {Line} from 'vue-chartjs'
  // 折线图
  export default {
    extends: Line,
    props:['data'],
    mounted(){
      this.renderChart(this.data,{responsive: true, maintainAspectRatio: false} )
    }
  }
</script>