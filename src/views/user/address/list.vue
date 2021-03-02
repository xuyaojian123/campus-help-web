<template>
  <div class="my-address">
    <nav-bar title="我的地址"></nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "Address",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  components: {
    NavBar,
  },
  methods: {
    onAdd() {
      this.$toast("新增地址");
      this.$router.push({
        path:"/address/edit",
        query:{
          title:"新增地址"
        }
      })
    },
    onEdit(item, index) {
      this.$toast("编辑地址:" + index);
      this.$router.push({
        path:"/address/edit",
        query:{
          title:"编辑地址"
        }
      })
    },
    onSelect(item, index){
      this.$toast(item.name + index);
    }
  },
  mounted() {},
};
</script>

<style scoped>
.van-address-list__bottom{
  bottom:0.5rem;
}
</style>
