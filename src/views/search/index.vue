<template>
  <div>
    <van-checkbox-group v-model="result">
      <van-checkbox name="a">复选框 a</van-checkbox>
      <van-checkbox name="b">复选框 b</van-checkbox>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      result: ['a', 'b'],
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
