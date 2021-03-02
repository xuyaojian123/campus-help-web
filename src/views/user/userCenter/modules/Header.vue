<template>
  <div class="header">
    <van-cell
      center
      :border="false"
      class="van-cell-padding"
      is-link
      title-class="title"
      label-class="label"
    >
      <template #icon>
        <image-pic
          class="profile-photo"
          fit="cover"
          width="1.5rem"
          height="1.5rem"
          round
          :src="require('@/assets/images/test/4.jpg')"
        />
      </template>
      <template #title>
        重温旧梦@
      </template>
      <template #label>
        邮箱：2450703254@qq.com
      </template>
    </van-cell>

    <van-grid :border="false">
      <van-grid-item text="我的钱包">
        <template #icon>
          <span class="head-item">￥888</span>
        </template>
      </van-grid-item>
      <van-grid-item text="购物车">
        <template #icon>
          <span class="head-item">6</span>
        </template>
      </van-grid-item>
       <van-grid-item text="关注">
        <template #icon>
          <span class="head-item">12</span>
        </template>
      </van-grid-item>
       <van-grid-item text="粉丝">
        <template #icon>
          <span class="head-item">5</span>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.header >>> .van-cell{
  background-color: #84bdf7;
}
.header >>> .van-grid{
  background-color: #84bdf7;
}
.header >>> .van-grid-item__content{
  background-color: #84bdf7;
}
.profile-photo {
  margin-right: 0.2rem;
}
.title {
  font-weight: bolder;
  font-size: 0.5rem;
}
.label {
  font-weight: 0.3rem;
  font-weight: inherit;
}
.head-item{
  font-size: 0.5rem;
}
.van-cell-padding{
  padding-top: 0.26667rem;
  padding-right: 0.42667rem;
  padding-bottom: 0;
  padding-left: 0.42667rem;
}
</style>
