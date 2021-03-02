<template>
  <div class="my-servce">
    <van-cell title="我发布的求助" is-link center>
      <template #icon>
        <svg-icon icon-class="求助" style="width: 0.5rem;height: 0.5rem;"/>
      </template>
    </van-cell>
    <van-cell title="收货地址" is-link center to="/address">
      <template #icon>
        <svg-icon icon-class="收货地址" style="width: 0.5rem;height: 0.5rem;"/>
      </template>
    </van-cell>
    <van-cell title="意见反馈" is-link center>
      <template #icon>
        <svg-icon icon-class="意见反馈" style="width: 0.5rem;height: 0.5rem;"/>
      </template>
    </van-cell>
    <van-cell title="开发说明" is-link center/>
    <van-button block class="logout" size="large" round type="danger">退出登录</van-button>
    <div class="version">当前版本V1.0</div>
  </div>
</template>

<script>
export default {
  name: "MyService",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.version {
  margin: 0 auto;
  text-align: center;
  font-size: 0.3rem;
  height: 1rem;
  color: grey;
  line-height: 1rem;
  margin-bottom: 0.4rem;
}
.logout{
  width: 95%;
  height: 1rem;
  margin: 0 auto;
}
</style>
