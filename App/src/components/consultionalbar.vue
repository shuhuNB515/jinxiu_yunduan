<template> 
<div class="consultation">
    <router-view></router-view>
        <div class="consultation-content">
            <div class="consultation-content-left">
                <div class="consultation-content-left-title">
                    <span>咨询</span>
                    <span>CONSULTATION</span>
                </div>
                <div class="consultation-content-left-content">
                    <div class="consultation-content-left-content-left">
                        <div class="consultation-content-left-content-left-title">
                            <span>咨询</span>
                            <span>CONSULTATION</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.consultation{
    width: 100%;
    height: 100%;
    background: url(../assets/consultation.jpg) no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.consultation-content{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.consultation-content-left{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>