<template>
  <div class="demand-item">
    <!-- 间隙 -->
    <div style="height: 0.25rem;background-color: #f7f8fa;"></div>
    <!-- 需求顶部 -->
    <van-cell center :border="false" class="van-cell">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #icon>
        <image-pic
          class="profile-photo"
          fit="fill"
          width="1rem"
          height="1rem"
          round
          :src="require('@/assets/images/login/back2.jpg')"
        />
      </template>
      <template #title>
        重温旧梦@
      </template>
      <template #label>
        2021-02-23 21:41
      </template>
      <template #right-icon>
        <van-tag
          style="margin-right: 10px"
          size="medium"
          plain
          round
          type="danger"
          >￥12.50</van-tag
        >
        <van-tag size="medium" plain round type="primary">联系ta</van-tag>
      </template>
    </van-cell>

    <!-- 需求内容 -->
    <van-cell
      class="van-cell"
      :border="false"
      value="有哪位同学知道图中18题怎么写吗，有偿。有哪位同学知道图中18题怎么写吗，有偿。"
    />

    <!-- 图片 -->
    <van-row>
      <van-col span="22" offset="1">
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
          </van-grid-item>
        </van-grid>
      </van-col>
    </van-row>

    <!-- 底部 -->
    <van-row style="text-align: center;">
      <van-col span="8">
        <van-icon name="fire-o" badge="99+" size="0.6rem"></van-icon>
      </van-col>
      <van-col span="8">
        <van-icon name="chat-o" badge="9" size="0.6rem" />
      </van-col>
      <van-col span="8">
        <van-icon name="good-job-o" badge="9" size="0.6rem" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "DemandItem",
  data() {
    return {};
  },
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },

    image_num: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: "",
    },
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.profile-photo {
  margin-right: 0.2rem;
}
.van-cell {
  padding-top: 0.26667rem;
  padding-right: 0.42667rem;
  padding-bottom: 0;
  padding-left: 0.42667rem;
  line-height: 0.54rem;
}
.van-info {
  background-color: #1989fa;
}
</style>
