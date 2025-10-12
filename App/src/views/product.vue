<template>
    <div class="product">
        <router-view></router-view>
        <div class="product-title">
            <h2>产品中心</h2>
            <p>Product Center</p>
        </div>
        <div class="product-carousel">
            <Carouselbar></Carouselbar>
        </div>
        <div class="product-content">
            <div class="product-content-left">
                <div class="product-content-left-top">
                    <img src="../../assets/img/product1.png" alt="">
                    <div class="product-content-left-top-text">
                        <h3>产品名称</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carouselbar from '../components/Carouselbar.vue';

export default {
    components: {
        Carouselbar
    }
}
</script>