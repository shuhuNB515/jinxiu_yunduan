<template>
<div class="container0">
    <router-view></router-view>
    <div class="part1">
    <aboutbar></aboutbar>
    </div>
</div>
</template>
<script>
import aboutbar from '../components/aboutbar.vue'
export default {
    components:{
        aboutbar
    }
}
</script>
<style scoped>
.part1{
margin: 10px;
border: 3px solid red;
border-radius: 12px;
}
</style>