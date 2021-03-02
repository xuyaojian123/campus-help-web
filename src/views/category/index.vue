<template>
  <div class="category">
    <Header />
    <van-tree-select v-if="!loading" @click-nav="changeNav" height="calc(100vh - 2.78rem)" :items="items"  :main-active-index.sync="active">
      <template #content>
        <content-view :key="key" :category="items[active].children" :images="images" />
      </template>
    </van-tree-select>
    <!-- loading加载 -->
    <loading :loading="loading"/>
    
  </div>
</template>

<script>
import Header from "./modules/Header";
import ContentView from "./modules/ContentView";


import Loading from '@/components/Loading'

export default {
  name: "Category",
  data() {
    return {
      key:0,
      active: 0,
      loading:true,
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      items: [
        {
          categoryId:1,
          parentId:0,
          text: "书籍教材",
          children: [
            {
              text: "全部",
              parentId:1
            },
            {
              text: "计算机",
              categoryId:2,
              parentId:1,
            },
            {
              text: "数学",
              categoryId:3,
              parentId:1,
            },
            {
              text: "文学",
              categoryId:10,
              parentId:1,
            },
            {
              text: "小说",
              categoryId:11,
              parentId:1,
             
            },
            {
              text: "历史",
              categoryId:12,
              parentId:1,
            },
             {
              text: "英语",
              categoryId:13,
              parentId:1,
            },
          ],
        },

        {
          categoryId:4,
          parentId:0,
          text: "电子产品",
          children: [
            {
              text: "全部",
              parentId:4
            },
            {
              text: "手机",
              categoryId:5,
              parentId:4,
            },
            {
              text: "平板",
              categoryId:6,
              parentId:4,
            },
          ],
        },

        {
          categoryId:7,
          parentId:0,
          text: "生活用品",
          children: [
            {
              text: "全部",
              parentId:7
            },
            {
              text: "牙刷",
              categoryId:8,
              parentId:7,
            },
            {
              text: "洗衣机",
              categoryId:9,
              parentId:7,
            },
          ],
        },
      ],
    };
  },
  components: {
    Header,
    ContentView,
    Loading
  },
  methods: {
    changeNav(index){
      this.key = index
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  },
  mounted() {},
};
</script>

<style scoped>
.van-tree-select__nav{
  flex: none;
}
</style>
