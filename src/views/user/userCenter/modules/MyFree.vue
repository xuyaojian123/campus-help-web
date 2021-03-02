<template>
  <div class="my-free">
    <van-cell title="我的闲置" :border="false" size="large"></van-cell>
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="photo-o" text="我发布的 7">
        <template #icon>
          <svg-icon icon-class="我发布的" style="width: 0.5rem;height: 0.5rem;"/>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="我卖出的 2">
        <template #icon>
          <svg-icon icon-class="卖出的订单"  style="width: 0.5rem;height: 0.5rem;"/>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="我买到的 3">
        <template #icon>
          <svg-icon icon-class="买到的货"  style="width: 0.5rem;height: 0.5rem;"/>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'MyFree',
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

/* 如果您希望scoped样式中的选择器“深入”，即影响子组件，则可以使用>>>组合器 */
.my-free >>> .van-grid-item__content{
  
  padding-top: 0;
  padding-right: 0.21333rem;
  padding-bottom: 0.42667rem;
  padding-left: 0.21333rem;
}
</style>