<script>
// 柱状图
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props:['data'],
  mounted () {
    // Overwriting base render method with actual data.
    // data，option
    this.renderChart(this.data,{responsive: true, maintainAspectRatio: false})
  }
}
</script>