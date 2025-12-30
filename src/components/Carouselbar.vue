<template>
  <div class="container">
    <div class="carousel-wrapper">
      <div class="carousel">
        <div 
          v-for="(item, index) in items" 
          :key="index" 
          class="carousel-item"
          :style="getItemStyle(index)"
        >
          <img :src="item.image" alt="轮播图">
          <div class="carousel-item-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="arrows">
      <div class="indicators">
        <div 
          v-for="(item, index) in items" 
          :key="index" 
          class="indicator" 
          :class="{ active: currentIndex === index }"
          @click="setCurrentIndex(index)"
        ></div>
      </div>
      <div class="controls">
        <button class="btn" @click="prev">上一张</button>
        <button class="btn" @click="toggleAutoRotate">
          {{ autoRotate ? '暂停' : '开始' }}旋转
        </button>
        <button class="btn" @click="next">下一张</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const currentIndex = ref(0);
    const autoRotate = ref(true);
    const items = ref([
      {
        title: "山脉风光",
        description: "壮丽的自然山脉景观，白雪覆盖的山峰在阳光下闪耀",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "海滩日落",
        description: "宁静的海滩日落，金色的阳光洒在海面上",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "森林小径",
        description: "神秘幽静的森林小径，阳光透过树叶洒下斑驳光影",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "城市夜景",
        description: "繁华都市的璀璨夜景，灯火辉煌的天际线",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "沙漠奇观",
        description: "广袤无垠的沙漠，风塑造的沙丘线条优美",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      }
    ]);
    
    const totalItems = computed(() => items.value.length);
    
    const getItemStyle = (index) => {
      // 只显示当前项，其他项完全透明
      return {
        opacity: currentIndex.value === index ? 1 : 0,
        zIndex: currentIndex.value === index ? 10 : 1,
        transition: 'opacity 0.5s ease'
      };
    };
    
    const next = () => {
      currentIndex.value = (currentIndex.value + 1) % totalItems.value;
    };
    
    const prev = () => {
      currentIndex.value = (currentIndex.value - 1 + totalItems.value) % totalItems.value;
    };
    
    const setCurrentIndex = (index) => {
      currentIndex.value = index;
    };
    
    const toggleAutoRotate = () => {
      autoRotate.value = !autoRotate.value;
    };
    
    let interval;
    
    onMounted(() => {
      interval = setInterval(() => {
        if (autoRotate.value) {
          next();
        }
      }, 3000);
    });
    
    onBeforeUnmount(() => {
      clearInterval(interval);
    });
    
    return {
      currentIndex,
      autoRotate,
      items,
      getItemStyle,
      next,
      prev,
      setCurrentIndex,
      toggleAutoRotate
    };
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 800px;
  text-align: center;
  position: absolute;
  top: 22%;
  left: 5%;
  /* transform: translate(20%, -20%); */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.carousel-wrapper {
  position: absolute;
  height: 450px;
  width: 800px;
  margin: 0 auto;
  border: 2px solid #ddd;
  border-radius: 5px;
  left: 11%;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  width: 70%;
  height: 80%;
  top: 0;
  left: 15%;
  background: rgba(150, 54, 54, 0.9);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  /* 过渡效果仅应用于 opacity */
  transition: opacity 1s ease;
}

.carousel-item-content {
  padding: 30px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
  color: rgb(97, 33, 33);
  text-align: bottom;
}

.carousel-item h3 {
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 600;
}

.carousel-item p {
  font-size: 10px;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 0px;
  border: 1px ;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  border: 1px ;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.arrows{
margin: 1px;
position: relative;
top: -100px;
}
.controls {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 10px;
  position: relative;
  top: 0%;
}

.btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.1s ease;
  backdrop-filter: blur(10px);
}

.btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
}

.indicator {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.1s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}


</style>