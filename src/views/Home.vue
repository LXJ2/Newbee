<template>
  <div class="home">
       <topNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import {indexInfo} from '../api/home'
import topNav from '../components/home/topNav'
export default {
  name: 'Home',
  data(){
    return{
      banner:[],
      newGods:[],
      hotGoodses:[],

    };
  },
  components:{
    topNav,
  }
}
</script>
