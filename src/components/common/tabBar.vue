<template>
    <div class="my_tab_bar_box">
    <van-nav-bar 
    v-bind="$attrs" 
    v-on="$listeners"
    >
  <template #right>
    ...
  </template>
</van-nav-bar>
        
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'myTabBar',
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">
.my_tab_bar_box{
    position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    z-index: 20;
    
}
</style>