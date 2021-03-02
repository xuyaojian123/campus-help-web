<template>
  <div class="cart">
    <Nav @handleDeleteBatches="handleDeleteBatches" :disabled="disabled" />
    <card-item
      v-for="(item, index) in cart"
      :key="index"
      :index="index"
      :info="item"
      :is-checked="item.isChecked"
      @input="handleItemSelect"
      @handleDelete="handleDelete"
    />
    <tabbar
      :amount="amount"
      :value="isSelectAll"
      @input="handleSelectAll"
      @handleSubmit="handleSubmit"
    />

    <Skeleton v-if="isSkeletonShow" />
    <!-- <van-empty v-if="list && list.length <= 0" description="购物车里没有内容" /> -->
  </div>
</template>

<script>
import Nav from "./modules/Nav";
import CardItem from "./modules/CardItem";
import Tabbar from "./modules/Tabbar";
import Skeleton from './modules/Skeleton'

export default {
  name: "Cart",
  data() {
    return {
      cart: [
        {
          id: 1,
          title: "计算机组成原理",
          price: 8.5,
          keywords: ["计算机", "编程"],
          content: "有需要的学妹学弟，可以来NB134,免费送",
          isChecked: true,
        },
        {
          id: 2,
          title: "C语言程序设计",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
          isChecked: true,
        },
        {
          id: 2,
          title: "C语言程序设计",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
          isChecked: true,
        },
        {
          id: 2,
          title: "C语言程序设计",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
          isChecked: true,
        },
        {
          id: 2,
          title: "C语言程序设计",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
          isChecked: true,
        },
        {
          id: 2,
          title: "C语言程序设计",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
          isChecked: true,
        },
        {
          id: 2,
          title: "C语言程序设计",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
          isChecked: true,
        },
      ],
      amount: 0,
      isSelectAll: false,
      isSkeletonShow: true,
    };
  },
  components: {
    Nav,
    CardItem,
    Tabbar,
    Skeleton
  },
  mounted() {
    setTimeout(() => {
      this.isSkeletonShow = false
    }, 1000);
  },
  watch: {
    cart: {
      immediate: true,
      handler(val) {
        if (val && val.length > 0) {
          let money = 0,
            flag = true;
          for (let index = 0; index < val.length; index++) {
            const item = val[index];
            if (item.isChecked) money += item.price;
            else flag = false;
          }
          this.isSelectAll = flag;
          this.amount = money * 100;
        }
      },
    },
  },
  computed: {
    disabled() {
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.isChecked) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    // 单选
    handleItemSelect(val, index) {
      // Vue 不能对通过索引修改数组的值产生响应式
      const newval = this.cart[index];
      newval.isChecked = val;
      this.$set(this.cart, index, newval);
    },
    //删除购物车
    handleDelete(index, id) {
      console.log(index + " " + id);
      this.cart.splice(index, 1);
    },
    //批量删除购物车
    handleDeleteBatches() {
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.isChecked) {
          this.cart.splice(index, 1);
          index--;
        }
      }
    },
    // 购物车全选和取消全选
    handleSelectAll(value) {
      const cartList = this.cart.map((element) => {
        element.isChecked = value;
        return element;
      });
      // 替换数组使得达到响应式
      this.cart = cartList;
    },
    // 提交订单
    handleSubmit() {
      if (this.disabled) {
        this.$toast.fail({
          message: "请至少选中一件商品",
          forbidClick:true,
        });
        return;
      }
      const cartIds = []
      this.cart.forEach(element => {
        if(element.isChecked) cartIds.push(element.id)
      });
    },
  },
};
</script>

<style scoped></style>
