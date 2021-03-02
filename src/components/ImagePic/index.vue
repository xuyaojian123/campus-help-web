<template>
  <div>
    <!-- https://youzan.github.io/vant/#/zh-CN/image#api -->
    <!-- $attrs 可以很方便的做到属性透传，使用起来也比较简单，避免了多写 props 的痛苦 -->
    <van-image v-bind="$attrs" lazy-load style="display:block">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      <template v-slot:error>加载失败</template>
    </van-image>
  </div>
</template>
