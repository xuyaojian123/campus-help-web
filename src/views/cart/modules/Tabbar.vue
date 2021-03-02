<template>
  <div class="tabbar">
    <van-submit-bar
      :price="amount"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox
        v-model="checked"
      >全选</van-checkbox>
    </van-submit-bar>
    <div class="submit-bar-placeholder"/>
  </div>
</template>

<script>


export default {
  name:'Tabbar',
  props: {
    amount: {
      type: Number,
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style scoped>
.submit-bar-placeholder{
  width: 100%;
  height: 1.5rem;
}

</style>
