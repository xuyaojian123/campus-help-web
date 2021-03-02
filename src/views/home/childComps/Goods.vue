<template>
  <div class="home-goods">
    <van-tabs v-model="active" title-active-color="#F56C6C" color="#F56C6C" sticky animated swipeable>
      <van-tab title="推荐">
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
      </van-tab>
      <van-tab title="最新发布">
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
      </van-tab>
      <van-tab title="热门商品">
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
      </van-tab>
    </van-tabs>

    <!-- <van-list
      v-model="loading"
      :finished="isFinished"
      finished-text="没有更多了"
      @load="onReachBottom"
    >
      <div class="main">
        <goods-item
          v-for="(item, idx) in goodsList"
          :key="idx"
          :product-id="item.productId"
          :img="item.img"
          :title="item.title"
          :desc="item.desc"
          :price="item.price"
          :old-price="item.oldPrice"
        />
      </div>
    </van-list> -->
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem/index'


export default {
  data() {
    return {
      active:0
    }
  },
  components:{
    GoodsItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
  },
  computed: {

  },
  methods: {
    
  },
};
</script>

<style scoped>
.home-goods >>> .van-tabs__nav{
 background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
</style>
