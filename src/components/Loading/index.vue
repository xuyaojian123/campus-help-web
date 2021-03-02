<template>
  <div class="loading">
    <van-loading v-if="loading" type="spinner" color="#1989fa" vertical>加载中...</van-loading>
 </div>
</template>

<script>
export default {
  name: 'Loading',
  data() { 
    return {

    }
  },
  props:{
    loading:{
      type:Boolean,
      default:true
    }
  },
  components:{
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style scoped>
.loading{
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>