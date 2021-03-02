<template>
  <div class="user-center">
    <Header />
    <my-order></my-order>
    <my-free></my-free>
     <!-- 间隙 -->
    <div style="height: 0.25rem;background-color: #f7f8fa;"></div>
    <my-service></my-service>
   
  </div>
</template>

<script>
import Header from './modules/Header'
import MyOrder from './modules/MyOrder'
import MyFree from './modules/MyFree'
import MyService from './modules/MyService'
export default {
  name: "User",
  data() {
    return {};
  },
  components: {
    Header,
    MyOrder,
    MyFree,
    MyService
  },
  methods: {
   
  },
  mounted() {},
};
</script>

<style scoped></style>
