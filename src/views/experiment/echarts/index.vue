<template>
  <div>
    <div>
      这是Echarts页面
    </div>
    <div id="main" style="width:100%;height:1000px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data(){
    return{
      charts:'',
      opinion:['00后','10后','20后','30后','40后','50后','60后','70后','80后','90后'],
      opinionData:[
        {value:335,name:'00后'},
        {value:3100,name:'10后'},
        {value:222,name:'20后'},
        {value:315,name:'30后'},
        {value:395,name:'40后'},
        {value:800,name:'50后'},
        {value:1,name:'60后'},
        {value:2,name:'70后'},
        {value:3,name:'80后'},
        {value:4,name:'90后'},
      ],
    }
  },
  methods:{
    drawPie(id){
      this.charts=echarts.init(document.getElementById(id))
      this.charts.setOption({
        // 1.标题设置
        title: {
              text: '学生生源地来源分布图',//标题内容
              subtext: '模拟数据',//副标题
              // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
              x: 'center',
              // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
              y: 'top',
              // itemGap设置主副标题纵向间隔，单位px，默认为10，
              itemGap: 10,
              backgroundColor: '#eee',//没有用到
              // 主标题文本样式设置
              textStyle: {
                fontSize: 26,
                fontWeight: 'bolder',
                color: '#000080'
              },
              // 副标题文本样式设置
              subtextStyle: {
                fontSize: 18,
                color: '#8B2323'
              }
          },
        tooltip:{
          trigger:'item',
        },
        // 2设置旁边的标识
        legend:{
          orient:'vertical',//设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          x:'right',// x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          y: 'top',// y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          itemWidth: 34,   // 设置图例图形的宽
          itemHeight: 18,  // 设置图例图形的高
          textStyle:{
             color:'#00ff00',//设置文字的颜色
          },
          itemGap:50,//设置图例间隔，单位px，默认为10，
          backgroundColor: '#eee',  // 设置整个图例区域背景颜色
          data:this.opinion//展示的文字数据
        },
        // 3、值域设置
        series:[
          {
            name:'性别',
            type:'pie',
            radius:['0%','60%'],// 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ['50%', '50%'],  // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            avoidLabelOverlap:true, //是否禁用动画效果
            label:{
              // 图形对应的文字设置
              normal:{
                show:true,//是否显示标签
                position:'outside',//标签的位置'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。
                             //'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
    		                    //position: 'left',
                formatter: '{b}:{c} {per|{d}%}',//a（系列名称），b（数据项名称），c（数值）, d（百分比）
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  }
                  // per: {
                  //   color: '#eee',
                  //   backgroundColor: '#334455',
                  //   padding: [4, 4],
                  //   borderRadius: 2,
                  //   lineHeight: 33
                  // }
                }
              },
              // 鼠标设置
              emphasis:{
                show:true,//鼠标放在圆环上显示的标签样式
                textStyle:{
                  fontSize:'30',
                  fontWeight:'blod'
                }
              },
            },
            // 引导线
            labelLine: {
    		        normal: {
    		          show: true,//是否显示引导线
  	              length:50,  //百分比引导线
  	              length2:100,    //视觉引导项第二段的长度。
    		        }
    		    },
            // 每个item的的分割线
            itemStyle: {
                normal: {
                    borderColor: "#FFFFFF", 
                        borderWidth: 1, 
                        label:{  
                            show:true,  
                                formatter:'{d}%'  
                        },  
                }
            },

            // 数据
            data:this.opinionData
          }

        ]
      })
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.drawPie('main')
    })
  },
  created() {
    
  },
}
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>