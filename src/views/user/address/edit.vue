<template>
  <div>
    <nav-bar :title="$route.query.title"></nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @show-set-default="onSetDefault"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

import areaList from '@/utils/area.js'
export default {
  name: "edit",
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  components: {
    NavBar
  },
  mounted() {},
  methods: {
    onSave() {
      this.$toast('保存成功');
    },
    onDelete() {
      this.$toast('删除成功');
    },
    onSetDefault(value){
      this.$toast(value)
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped></style>
