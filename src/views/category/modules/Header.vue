<template>
  <div class="header">
    <van-search
      shape="round"
      background="#1989fa"
      placeholder="请输入商品关键字"
      @click="onSearch"
    />

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    onSearch(){
      this.$router.push('/search')
    }
  },
  
};
</script>

<style scoped>

</style>
