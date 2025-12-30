<template>
  <div class="app-container">
    <div class="header">
      <Navbar1 />
      <Headbar />
    </div>
    
    <!-- 修正：router-view 应为独立标签 -->
    <div class="main-content">
      <router-view /> <!-- 移除非空内容 -->
    </div>
    
    <div class="footer">
      
    </div>
  </div>
</template>

<script>


import Navbar1 from './components/Navbar1.vue'
import Headbar from './components/Headbar.vue'
import logoin from './components/logoin.vue'
import home from './views/home.vue'

export default {
  name: 'App',
  components: {
    Navbar1,
    Headbar,
    logoin,
    home
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url();
}
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>