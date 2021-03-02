<template>
  <div class="content-view">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <image-pic :src="image" fit="contain" width="100%" height="2rem" />
      </van-swipe-item>
    </van-swipe>

    <!-- 下拉菜单 -->
    <div @click="menuClick" class="arrow">
      <van-icon name="arrow-down" size="0.6rem" />
    </div>

    <!-- 内容 -->
    <van-tabs v-model="active" swipeable @click="tabClick">
      <template #nav-right>
        111
      </template>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.text"
      >
        <van-card
          v-for="(item, index) in showGoods"
          :key="index"
          :price="item.price"
          :desc="item.content"
          :title="item.title"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag round style="margin-left: 5px;" type="warning">标签</van-tag>
          </template>
          <template #num>
            <van-icon
              @click="addCart"
              name="add"
              size="0.6rem"
              color="#1989fa"
            />
          </template>
        </van-card>
      </van-tab>
    </van-tabs>

    <van-overlay
      :show="show"
      :custom-style="{
        width: 'calc(100vw - 2.13333rem)',
        height: 'calc(100vh - 2.78rem)',
        top: '1.438rem',
        left: '2.13333rem',
        zIndex: 99,
      }"
      @click="show = false"
    >
     
      <div class="tags">
        <van-cell title="全部分类" is-link arrow-direction="up" />
        <van-tag
          @click="tagClick(index)"
          style="margin-left: 10px;margin-top: 10px;"
          v-for="(item, index) in category"
          :key="index"
          plain
          size="large"
          type="primary"
          :text-color="active ==index ? '#1989fa':'#323233'"
          >{{ item.text }}</van-tag
        >
      </div>
      <!-- text-color="#1989fa" -->
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "ContentView",
  data() {
    return {
      show: false,
      active: 0,
      showGoods: [],
      goods: [
        {
          categoryId: 2,
          parentId: 1,
          title: "计算机组成原理",
          price: 5.5,
          keywords: ["计算机", "编程"],
          content: "有需要的学妹学弟，可以来NB134,免费送",
        },
        {
          categoryId: 2,
          parentId: 1,
          title: "C语言程序设计",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
        },
        {
          categoryId: 3,
          parentId: 1,
          title: "高等数学",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
        },
        {
          categoryId: 10,
          parentId: 1,
          title: "大学语文",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
        },
        {
          categoryId: 11,
          parentId: 1,
          title: "刺杀小说家",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
        },
        {
          categoryId: 12,
          parentId: 1,
          title: "《全球通史:从史前史到21世纪》 ",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
        },
        {
          categoryId: 13,
          parentId: 1,
          title: "大学英语II",
          price: 8.5,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
        },

        {
          categoryId: 5,
          parentId: 4,
          title: "小米10青春版",
          price: 500.58,
          keywords: ["水仙花", "编程"],
          content: "寻找一个有缘人送给他",
        },
      ],
    };
  },
  props: {
    category: {
      type: Array,
      default: () => [],
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  created() {
    this.tabClick(0);
  },
  mounted() {},
  methods: {
    // 5.点击下拉菜单
    menuClick() {
      this.show = true
      
    },

    // tab切换，请求数据
    tabClick(index) {
      this.showGoods = [];
      if (index == 0) {
        for (let i = 0; i < this.goods.length; i++) {
          const element = this.goods[i];
          if (element.parentId == this.category[index].parentId) {
            this.showGoods.push(element);
          }
        }
      } else {
        for (let i = 0; i < this.goods.length; i++) {
          const element = this.goods[i];
          if (element.categoryId == this.category[index].categoryId) {
            this.showGoods.push(element);
          }
        }
      }
    },

    // tag切换，请求数据
    tagClick(index){
      this.active = index
      this.tabClick(index)
    },


    // 添加购物车
    addCart() {
      this.$toast.success("快去购买吧");
    },
  },
};
</script>

<style scoped>
.content-view {
  position: relative;
}
.arrow {
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 2;
  background-color: #fff;
  padding-top: 0.25rem;
  padding-right: 0.2rem;
}
.tags {
  background-color: #fff;
  padding-bottom: 40px;
}
</style>
