<script>
import { HorizontalBar } from 'vue-chartjs'//竖柱状图

export default {
  extends:HorizontalBar,
  props:['data'],
  mounted(){
    this.renderChart(this.data,{responsive: true, maintainAspectRatio: false})
  }
}
</script>
