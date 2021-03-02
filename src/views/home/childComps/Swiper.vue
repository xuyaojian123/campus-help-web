<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color='#409EFF' :stop-propagation='false'>
      <van-swipe-item v-for="(item, index) in banner" :key="index" @click="onNavigate">
        <image-pic  :src="item" fit="contain" width="100%" height="150px" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    onNavigate() {
      this.$router.push({
        path: '/product'
      })
    }
  }
}
</script>
