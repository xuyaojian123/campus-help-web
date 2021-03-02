<template>
  <div class="nav-compoment">
    <van-nav-bar
      fixed
      placeholder
      safe-area-inset-top
      :title="title"
      :left-text="leftText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
    >
      <template #right>
        <slot />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    leftText: {
      type: String,
      default: "返回",
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped></style>
