<template>
  <div class="my-order">
    <van-cell title="我的订单" is-link value="全部订单" :border="false" size="large"></van-cell>
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="photo-o" text="待支付">
        <template #icon>
          <van-badge :content="5">
            <svg-icon icon-class="待支付" style="width: 0.5rem;height: 0.5rem;"/>
          </van-badge>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="已支付">
        <template #icon>
          <svg-icon icon-class="已支付"  style="width: 0.5rem;height: 0.5rem;"/>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="待评价">
        <template #icon>
          <van-badge :content="5">
            <svg-icon icon-class="待评价"  style="width: 0.5rem;height: 0.5rem;"/>
          </van-badge>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "MyOrder",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped >
/* 如果您希望scoped样式中的选择器“深入”，即影响子组件，则可以使用>>>组合器 */
.my-order >>> .van-grid-item__content{
  padding-top: 0;
  padding-right: 0.21333rem;
  padding-bottom: 0.42667rem;
  padding-left: 0.21333rem;
}
.my-order >>> .van-badge--fixed{
  top:0.3rem;
}

</style>
