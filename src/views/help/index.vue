<template>
  <div class="help">
    <!-- 头部导航栏 -->
    <nav-bar />
    <!-- 内容 -->
    <van-tabs v-model="active" sticky animated swipeable title-active-color="#F56C6C" color="#F56C6C">
      <van-tab  v-for="(item,index) in category" :title="item" :key="index">
        <demand-item></demand-item>
        <demand-item></demand-item>
        <demand-item></demand-item>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "./modules/Nav";

import DemandItem from '@/components/DemandsItem'
export default {
  name: "Help",
  data() {
    return {
      active:0,
      category: ["学术", "生活", "情感", "工作", "其他"],
    };
  },
  components: {
    NavBar,

    DemandItem
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>

</style>
