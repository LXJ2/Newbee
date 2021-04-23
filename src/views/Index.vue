<template>
    <div>
        <router-view></router-view>
         <bot-nav/>
        
    </div>
</template>
<script>
// @ is an alias to /src
import botnav from '../components/common/botNav'
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        "bot-nav":botnav
        
    }
}
</script>
<style lang="less">



</style>