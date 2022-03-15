<template>
  <div>
    <h1>three.js的基础知识</h1>
    <div>
      <button @click="handleAnimate">点击转动</button>
    </div>
    <div id="container"></div>
  </div>
</template>
<script>
import * as THREE from 'three' //引入
import {OrbitControls} from './js/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader';
export default {
  data(){
    return{
      camera:null,
      scene:null,
      renderer:null,
      mesh:null,
      keyboard:{},
      player:{height:0,speed:0.02,rotationSpeed:Math.PI*0.01}
    }
  },
  mounted(){
    this.init()
    this.handleAnimate()
    window.addEventListener('keydown',this.keyDown)
    window.addEventListener('keyup',this.keyUp)
  },
  methods:{
    init(){
      let container = document.getElementById("container");
      // 创建场景
      this.scene=new THREE.Scene();
      /*创建相机
      *参数：fov — 摄像机视锥体垂直视野角度
            aspect — 摄像机视锥体长宽比，默认值是1（正方形画布）
            near — 摄像机视锥体近端面，默认值是0.1
            far — 摄像机视锥体远端面，默认值是2000。
      */ 
      this.camera=new THREE.PerspectiveCamera(75,container.clientWidth / container.clientHeight,0.1,1000);
      this.camera.position.set(0,0,60);
      // this.camera.lookAt(new THREE.Vector3(0,0,0))
      // this.camera.lookAt(0,0,0)

       // 创建贴图
      var texture = new THREE.TextureLoader();
      let image1=texture.load( "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1115%2F101021113337%2F211010113337-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648979256&t=88373fabe4e6c764738b3f3d8946eebc" );
      let image2=texture.load('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.1230530.com%2Fpublic%2Fuploads%2Fimages%2F20211017%2F2538_20211017231117c46c5.jpg&refer=http%3A%2F%2Fwww.1230530.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649473909&t=471e8168bfc05ab80e71cb7a5351a7d4')
      let image3=texture.load('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F100416110525%2F161004110525-20.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649473909&t=c4759d43723c4c9853c3ceae97e9d39e')
      // 创建箱子并贴图
      var initMesh = new THREE.MeshPhongMaterial({
            specular: 0xffffff,
            color: 0x7777ff
        });

      // 创建旋转箱体
      this.mesh=new THREE.Mesh(
        // 创建立方体
        new THREE.BoxGeometry(15,15,15),
        // new THREE.SphereGeometry(1,32,16),
        // 添加材质(MeshBasicMaterial为透光材质)
        // new THREE.MeshBasicMaterial({color:'#f00',wireframe:false})
         new THREE.MeshFaceMaterial([
            new THREE.MeshPhongMaterial({map:image1}),
            new THREE.MeshPhongMaterial({map:image2}),
            new THREE.MeshPhongMaterial({map:image1}),
            new THREE.MeshPhongMaterial({map:image3}),
            new THREE.MeshPhongMaterial({map:image2}),
            initMesh,
        ])
      );
      // 创建底部网格
      let meshfloor=new THREE.Mesh(
        new THREE.PlaneGeometry(200,200,10,10),
        new THREE.MeshLambertMaterial({color:'#fff',wireframe:false})
      );
      // 设置底部网格的位置
      meshfloor.rotation.x-=Math.PI/4;
      meshfloor.position.z-=30;



      // 创建箱体
      let boxMesh=new THREE.Mesh(
        new THREE.BoxGeometry(10,10,10),
        new THREE.MeshPhongMaterial({color:'#f00',wireframe:false})
      )
      boxMesh.position.set(-50,10,-30)
      boxMesh.rotation.set(-Math.PI/4,0,0)
      this.scene.add(boxMesh)

      // 导入外部3d模型
      // 小红旗
      let gltfLoader=new GLTFLoader();
      gltfLoader.load('/static/models/flag.glb',(mesh)=> {
        mesh.scene.traverse(child => {
          if (child.isMesh) {
            // meshes.push(child)
            child.castShadow = true;
            // 旗帜
            if (child.name === 'mesh_0001') {
              child.material.metalness = .1;
              child.material.roughness = .1;
              child.material.map = new THREE.TextureLoader().load('/static/models/flag.png');
            }
            // 旗杆
            if (child.name === '柱体') {
              child.material.metalness = .6;
              child.material.roughness = 0;
              child.material.refractionRatio = 1;
              child.material.color = new THREE.Color('#eee');
            }
          }
        });
        mesh.scene.rotation.y = Math.PI / 24;
        mesh.scene.position.set(-30, -10, 0);
        mesh.scene.scale.set(5, 5, 5);
        this.scene.add(mesh.scene)
      })
      //  小人
      let loader=new MTLLoader();
      loader.setTexturePath('/static/models/').load('male02.mtl',(materials)=>{
        materials.preload();
        materials.side = THREE.DoubleSide;
        new OBJLoader().setMaterials(materials).load('/static/models/male02.obj',(obj)=>{
          obj.traverse(node=>{
              node.castShadow=true;
              // node.receiveShadow=true;
          })
          obj.scale.set(0.2,0.2,0.2);
          obj.position.set(30,-25,0)
          this.scene.add(obj)
        })
      })



      // 创建一个平行光源照射到物体上
      // let light =new THREE.DirectionalLight(0xffffff,1.5);
      var light = new THREE.PointLight( 0xffffff, 1);
      // var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
      // light.position.set( 5, 5, 50 );
      // 设置照射方向
      light.position.set(20,20,60);
      // 环光
      let smbientLight=new THREE.AmbientLight(0xffffff,0.1)
      // 将光源添加到场景中
      this.scene.add(light);
      this.scene.add(smbientLight)



      // 将网格添加到场景中
      this.scene.add(this.mesh);
      this.scene.add(meshfloor);

      // 创建渲染器
      this.renderer=new THREE.WebGLRenderer();
      // 设置渲染器的大小
      this.renderer.setSize(container.clientWidth,container.clientHeight)
      this.renderer.render(this.scene,this.camera)

       // 设置阴影
      this.renderer.shadowMap.enabled=true;//是否需要阴影
      light.castShadow=true;//光源是产生阴影的光源
      this.mesh.castShadow=true;//指定物体添加阴影
      boxMesh.castShadow=true;
      meshfloor.receiveShadow = true; // 设置平面网格为接受阴影的投影面

      // 添加到元素中
      container.appendChild(this.renderer.domElement)
    },
    handleAnimate(){
      requestAnimationFrame(this.handleAnimate);
      this.mesh.rotation.x+=0.01;
      this.mesh.rotation.y+=0.02;

      // 鼠标操作
      var controls =new OrbitControls(this.camera,this.renderer.domElement);//创建控件对象
      controls.rotateSpeed=0.001//旋转速度
      controls.enableZoom=true//设置是否开启滚轮缩放
      controls.zoomSpeed=0.005;//滚轮缩放速度
      controls.enableDamping=true//阻尼
      // controls.minAzimuthAngle=0//小仰角（绕x轴即水平方向）
      // controls.maxAzimuthAngle=Math.PI/2//最大仰角
      // controls.minPolarAngle=-Math.PI//最小仰角(绕y轴方向即垂直方向)
      // controls.maxPolarAngle=Math.PI
      controls.update();
      // 渲染
      this.renderer.render(this.scene,this.camera)
      // w键
      if(this.keyboard[87]){
         this.camera.position.x-=Math.sin(this.camera.rotation.y)*this.player.speed;
         this.camera.position.z-=Math.cos(this.camera.rotation.y)*this.player.speed;
      }
      // s键
      if(this.keyboard[83]){
         this.camera.position.x+=Math.sin(this.camera.rotation.y)*this.player.speed;
         this.camera.position.z+=Math.cos(this.camera.rotation.y)*this.player.speed;
      }
      // a键
      if(this.keyboard[65]){
         this.camera.position.x+=Math.sin(this.camera.rotation.y+Math.PI/2)*this.player.speed;
         this.camera.position.z-=Math.cos(this.camera.rotation.y+Math.PI/2)*this.player.speed;
      }
      // d键
      if(this.keyboard[68]){
         this.camera.position.x+=Math.sin(this.camera.rotation.y-Math.PI/2)*this.player.speed;
         this.camera.position.z-=Math.cos(this.camera.rotation.y-Math.PI/2)*this.player.speed;
      }
      // 左键
      if(this.keyboard[37]){
         this.camera.rotation.y+=this.player.rotationSpeed
      }
       // 右键
      if(this.keyboard[39]){
         this.camera.rotation.y-=this.player.rotationSpeed
      }
    },
    keyDown(event){
       this.keyboard[event.keyCode]=true;
    },
    keyUp(event){
       this.keyboard[event.keyCode]=false;
    }
  }
}
</script>
<style scoped>
#container{
  width: 100%;
  height: 600px;
}
</style>