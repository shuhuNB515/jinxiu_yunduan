<template>
    <div class="container0">
        <router-view></router-view>
    <div class="news">
        <newsbar></newsbar>
        
    </div>
    </div>
</template>
<script>
import newsbar from '../components/newsbar.vue'
export default {
    components:{    
        newsbar
    }
}
</script>