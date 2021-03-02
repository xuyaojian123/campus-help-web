<template>
  <div class="home">
    <Header />
    <swiper :banner="images" class="swiper"></swiper>
    <goods></goods>
  </div>
</template>

<script>
import Header from './childComps/Header'
import Swiper from './childComps/Swiper'
import Goods from './childComps/Goods'

export default {
  name: "Home",
  data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  components: {
    Header,
    Swiper,
    Goods
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.swiper{
  margin-top: 0.3rem;
}
</style>
