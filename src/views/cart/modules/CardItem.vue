<template>
  <div class="cart-item">
    <van-row>
      <van-col span="3">
        <van-checkbox class="checkbox" v-model="checked" />
      </van-col>
      <van-col span="21">
        <van-swipe-cell :before-close="beforeClose">
          <van-card
            num="1"
            :price="info.price"
            :desc="info.content"
            :title="info.title"
            :thumb='require("@/assets/images/test/4.jpg")'
            @click="gotoDetail"
          >
            <template #tags>
              <van-tag round style="margin-left: 5px;" type="warning" v-for="(item, index) in info.keywords" :key="index">
                {{item}}
              </van-tag>
            </template>
          </van-card>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    index: {
      type: Number,
      default: 0
    },
    info:{
      type: Object,
      default:()=>({})
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked: {
      get() {
        return this.isChecked;
      },
      set(val) {
        this.$emit("input", val , this.index);
      },
    },
  },
  methods: {
    gotoDetail() {
      this.$router.push({
        path: "/detail",
        query: {
          productId: 2,
        },
      });
    },

    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？",
            })
            .then(() => {
              this.$emit("handleDelete", this.index, this.info.id);
              instance.close();
            })
            .catch(() => {
              instance.close();
            });
          break;
      }
    },
  },
};
</script>

<style scoped>
.cart-item{
  margin-bottom: 20px;
}
.checkbox {
  justify-content: center;
  height: 200px;
}
.delete-button {
  height: 100%;
}
</style>
