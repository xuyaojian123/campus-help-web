<template>
  <div class="goods-item">
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
        <van-tag style="margin-right: 10px" size="medium" round type="primary"
          >￥12.50</van-tag
        >
      </template>
    </van-cell>

    <van-cell :border="false" :value="value" />

    <van-row>
      <van-col span="22" offset="1">
        <van-grid :column-num="3" :border="false">
          <van-grid-item>
            <image-pic
              fit="cover"
              :src="require('@/assets/images/test/2.jpg')"
            />
          </van-grid-item>
          <van-grid-item>
            <image-pic
              fit="cover"
              :src="require('@/assets/images/test/2.jpg')"
            />
          </van-grid-item>
          <van-grid-item>
            <image-pic
              fit="cover"
              :src="require('@/assets/images/test/3.jpg')"
            />
          </van-grid-item>
        </van-grid>
      </van-col>
    </van-row>

    <van-cell
      :border="false"
      style="color: #969799;"
      title="#书本 #科技"
      value="78人浏览"
    />

    <van-row style="text-align: center;">
      <van-col span="8">
        <van-icon name="share-o" size="0.6rem" />
      </van-col>
      <van-col span="8">
        <van-icon name="chat-o" badge="9" size="0.6rem" />
      </van-col>
      <van-col span="8">
        <van-icon name="good-job-o" badge="9" size="0.6rem" />
      </van-col>
    </van-row>
    <div style="height: 0.3rem;background-color: #f7f8fa;"></div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  data() {
    return {
      loading: true,
      title: "操作系统/C语言程序设计",
      value:
        "本系统是基于部门做的一个简单数据权限控制，也就是通过用户角色中的数据权限控制用户能看哪些数据。" +
        "实现思路就是通过获取角色中关联的部门ID，再通过 IN 查询，达到数据权限控制，前提是被查询的表中需要有 部门ID 的字段。",
    };
  },
  mounted() {
    this.loading = false;
  },
  components: {},
  methods: {},
};
</script>

<style scoped>
.van-cell {
  padding-top: 0.26667rem;
  padding-right: 0.42667rem;
  padding-bottom: 0;
  padding-left: 0.42667rem;
  line-height: 0.54rem;
}
.profile-photo {
  margin-right: 0.2rem;
}

/* 如果您希望scoped样式中的选择器“深入”，即影响子组件，则可以使用>>>组合器 */
.goods-item >>> .van-grid-item__content {
  padding-top: 0.4rem;
  padding-right: 0.21333rem;
  padding-bottom: 0;
  padding-left: 0.21333rem;
}
</style>
