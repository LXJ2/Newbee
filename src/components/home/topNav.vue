<template>
    <div 
       class="top_nav_box"
       :class="{bg:isAddClass}" 
       >
    <div 
      class="iconfont icon-HAMBURGERMENU-copy-copy lefe_box"
      @click='$router.push("/list")'
    ></div>
    <div 
      class="middle_box"
      @click='$router.push("/search")'
    >middle</div>
    <div
      class="iconfont icon-yonghu right_box"
      @click='$router.push("/user")'  
    ></div>
        
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
           isAddClass:false,
           flag:false,
        };
    },
methods:{
    scroll(e) {
      if (!this.flag) {
        this.flag = true;
        setTimeout(() => {
          this.flag = false;
        }, 20);
        let st = document.documentElement.scrollTop || document.body.scrollTop;
        if (st > 50) {
          this.isAddClass = true;
        } else {
          this.isAddClass = false;
        }
      }
      console.log(e);
    },
    
},
created(){
    window.addEventListener("scroll",this.scroll,false);
},
beforeDestroy(){
    window.removeEventListener("scroll",this.scroll,false);
},
    
components: {},
}
</script>
<style lang="less">
.top_nav_box{
    display: flex;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    
    > div{
         .iconfont {
            font-size: 20px;
               }
         
    color: #1baeae;     
    background: transparent;
    }
    &.bg {
    background-color: #1baeaeed;
    color: #fff;
    }
}
</style>



