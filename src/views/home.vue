<template>
  <div class="container0">
   
  </div>
  <div class="container1">
    <router-view></router-view>
    <logoin></logoin>
    <carouselbar1></carouselbar1>
    </div>
    <div class="container2">
      <div class="container2-1"><News></News></div>
      <div class="container2-2"><Craftmans></Craftmans></div>
    </div>
</template>

<script>
//路径导入
import Navbar1 from '../components/Navbar1.vue' 
import logoin from '../components/logoin.vue'
import carouselbar1 from '../components/Carouselbar.vue'
import Headbar from '../components/Headbar.vue'
import News from '../components/News.vue'
import Craftmans from '../components/Craftmans.vue'
export default {
  //注册
  components: {
    Navbar1 ,
    logoin,
    carouselbar1,
    Headbar,
    News,
    Craftmans
  }
}
</script>``

<style>
*{
  margin: 0;
  padding: 0;
}
.container2{
  position: absolute;
  top:80%;
  left: 11%;
  width: 1200px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px #ccc
}

</style>