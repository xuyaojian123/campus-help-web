<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-if="$route.meta.showTab"></tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'

export default {
  name:'app',
  components:{
    Tabbar,
  }

};
</script>
<style>

</style>
