<template>
    <div class="bot_nav_box">
    <router-link to='/'>
         <div class="iconfont icon-xuanzhongshangcheng-copy"></div>
         <div class="title">首页</div>
    </router-link>
        <router-link to='/list'>
        <div class="iconfont icon-icon_type"></div>
         <div class="title">分类</div>
         </router-link>
        <router-link to='/cart'>
        <div class="iconfont icon-gouwucheshixin"></div>
         <div class="title">购物车</div>
         </router-link>
        <router-link to='/user'>
        <div class="iconfont icon-wode"></div>
         <div class="title">我的</div>
         </router-link>
        
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" >
.bot_nav_box {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  a {
    display: block;
    flex: 1;
    color: #333;
    position: relative;
    .iconfont {
      font-size: 20px;
    }
    .title {
    }
    &.current-exact {
      color:#1baeaeed;
    }
    .cart_num_icon {
      position: absolute;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 50%;
      background-color: red;
      color: #fff;
      top: 0;
      left: 50%;
      font-size: 12px;
    }
  }
}
</style>