<template>
  <div class="nav">
    <van-nav-bar title="帮帮忙">
      <template #left>
        <svg-icon icon-class="照相" style="width: 0.6rem;height: 0.6rem;"/>
        发布
      </template>
      <template #right>
        <svg-icon icon-class="筛选"></svg-icon>
        筛选
      </template>
    </van-nav-bar>
 </div>
</template>

<script>
export default {
  name: 'Nav',
  data() { 
    return {

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
.nav >>> .van-nav-bar{
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
</style>