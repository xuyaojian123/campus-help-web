<template>
  <div class="nav">
    <nav-bar title="购物车">
      <van-button
        @click="handleDeleteBatches"
        :disabled="disabled"
        round
        size="mini"
        type="danger"
        >删除</van-button
      >
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Nav",
  components: {
    NavBar,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleDeleteBatches() {
      this.$dialog
        .confirm({
          message: "确定要删除选中的宝贝吗？",
        })
        .then(() => {
          this.$emit("handleDeleteBatches");
        })
        .catch(() => {
          this.$dialog.close();
        });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
