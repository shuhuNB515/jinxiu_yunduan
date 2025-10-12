<template>
    <div class="craftsman">
        <router-view></router-view>
        <div class="craftsman-title">
            <h2>匠心手作</h2>
            <p>Handwork</p>
        </div>
        <div class="carouselbar">
            <Carouselbar></Carouselbar>
        </div>
        <div class="craftsman-content">
            <div class="craftsman-content-left">
                <div class="craftsman-content-left-top">
                    <img src="../../assets/images/craftsman1.jpg" alt="">
                    <div class="craftsman-content-left-top-text">
                        <h3>手工皂</h3>
                        </div>
                        </div>
            </div>
            </div>
            </div>
            
</template>

<script>
import Carouselbar from '../components/Carouselbar.vue';
export default {
    components:{
        Carouselbar,
    }
}

</script>