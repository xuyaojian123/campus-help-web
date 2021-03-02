<template>
  <div class="tabbar">
    <van-tabbar v-model="active" :fixed="true" route placeholder>
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="bars" to="/category">分类</van-tabbar-item>
      <van-tabbar-item class="add" @click="show = true">
        <template #icon>
          <svg-icon icon-class="加号" class-name="add-icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/help">
        <span>帮助</span>
        <template #icon="props">
          <svg-icon v-if="props.active" icon-class="社区-active" />
          <svg-icon v-else icon-class="社区" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="manager" to="/user">我的</van-tabbar-item>
    </van-tabbar>

    <!-- 点击+号出现发布的弹出层 -->
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :overlay-style="{ 'background-color': 'rgba(0,0,0,.85)' }"
      :style="{ height: '30%' }"
    >
      <!-- 每个元素的两侧间隔相等 -->
      <van-row type="flex" justify="space-around" class="pop">
        <van-col span="6" class="select" offset="2">
          <svg-icon icon-class="社区-激活1" style="width: 70px;height: 70px;" />
          <van-tag class="select-item" type="primary" size="large" color="#67C23A">发求助></van-tag>
        </van-col>
        <van-col span="6" class="select" offset="2">
          <svg-icon icon-class="照相" style="width: 70px;height: 70px;" />
          <van-tag class="select-item" type="primary" size="large" color="#1296db">发闲置></van-tag>
        </van-col>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      show: false,
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  components: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>

<style scoped>
.add {
  padding-bottom: 0.5rem;
  z-index: 2;
}
.add-icon {
  width: 120px !important;
  height: 120px !important;
}
.pop{
  margin-top: 15%;
}
.select{
  background-color:#fff;
}
.select-item{
  margin-left:  0.1rem;
  top: -30px;
}
</style>
