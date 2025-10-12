<template>
  <div class="container">
    <div class="headbar">
      <div class="nav-item">
        <router-link to="/"><h3>首页</h3></router-link>
      </div>
      <div class="nav-item">
        <router-link to="/news"><h3>新闻</h3></router-link>
        <div class="nav-item1">
        <router-link to="/craftsman"><h3>工匠</h3></router-link>
      </div>
        <!-- <router-link to="/morningnews"><h3>晨间新闻</h3></router-link> -->
      </div>
      <div class="nav-item">
        <router-link to="/craftsman"><h3>工匠</h3></router-link>
      </div>
      <div class="nav-item">
        <router-link to="/product"><h3>产品</h3></router-link>
      </div>
      <div class="nav-item">
        <router-link to="/service"><h3>服务</h3></router-link>
      </div>
      <div class="nav-item">
        <router-link to="/consultation"><h3>咨询</h3></router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about"><h3>关于我们</h3></router-link>
      </div>
      <div class="nav-item">
        <router-link to="/contact"><h3>联系我们</h3></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.headbar {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-item {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 3px;
  background: transparent;
  transition: all 0.3s ease;
}

.nav-item:hover::after {
  background: #4a6582;
}

.nav-item a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.nav-item a.router-link-exact-active {
  color: #4a6582;
  font-weight: 700;
}

.nav-item:hover {
  background-color: #f8fafc;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .headbar {
    width: 95%;
  }
  .nav-item {
    padding: 0 10px;
  }
  .nav-item a {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .headbar {
    flex-wrap: wrap;
    height: auto;
    padding: 10px 0;
  }
  .nav-item {
    width: 22%;
    height: 40px;
    margin: 5px 0;
    padding: 0 8px;
  }
}

@media (max-width: 480px) {
  .nav-item {
    width: 45%;
  }
}
</style>