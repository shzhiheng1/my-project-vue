import Vue from "vue";

/**
 * 水印指令
 * hide:是否隐藏水印效果
 * text：水印文字
 * font：字体
 * textColor: 文字颜色
 * width:宽度
 * height：高度
 * textRotate：旋转角度，-90到0
 * 
*/

Vue.directive('watermark',(el,binding)=>{
  let hide=binding.value.hide||false;
  if(hide) return 
  let text=binding.value.text || "测试水印";
  let font=binding.value.font || "16px Microsoft JhengHei";
  let textColor=binding.value.textColor || "rgba(215,215,215,0.2)";
  let width=binding.value.width||400;
  let height=binding.value.height||200;
  let textRotate= binding.value.textRotate||-20;
   
  function addWaterMarker(parentNode) {
    var canvasEl=document.createElement('canvas');
    parentNode.appendChild(canvasEl);
    canvasEl.width=width;
    canvasEl.height=height;
    canvasEl.style.display='none';
    var canvas=canvasEl.getContext('2d');
    canvas.rotate(textRotate*Math.PI/180);
    canvas.font=font;
    canvas.fillStyle=textColor;
    canvas.textAlign='left';
    canvas.textBaseline='middle';
    canvas.fillText(text,0,canvasEl.height);
    parentNode.style.backgroundImage= "url(" + canvasEl.toDataURL("image/png") + ")";
  }
  addWaterMarker(el)
})