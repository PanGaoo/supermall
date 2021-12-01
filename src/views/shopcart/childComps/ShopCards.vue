<template>
  <div class="CardBox">
    <div class="CardItem" v-for="(item, index) in cartList" :key="index">
      <van-card
        lazy-load
        :num="item.count"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.image"
      >
        <div slot="price">￥{{ item.count * item.price }}</div></van-card
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
</style>