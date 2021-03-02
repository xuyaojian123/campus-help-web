<template>
  <div class="header">
     <van-search
      shape="round"
      background="#409EFF"
      placeholder="请输入商品关键词"
      @click="onSearch"
    />
  </div>
</template>

<script>
export default {
  name:'Header',
 data() {
   return {
     
   }
 },
  methods: {
    onSearch() {
      this.$router.push({
        path: '/search'
      })
    },
  }
}
</script>>

<style scoped>
</style>
