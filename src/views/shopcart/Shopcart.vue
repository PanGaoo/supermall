<template>
  <div>
    <!--导航栏-->
    <shop-nav-bar />
    <!--商品展示页-->
    <shop-cards />
    <!--提交页-->
    <van-submit-bar
      :price="cartPirce"
      button-text="提交订单"
      style="margin-bottom: 50px"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShopCards from "./childComps/ShopCards.vue";
import ShopNavBar from "./childComps/ShopNavBar.vue";
export default {
  components: { ShopCards, ShopNavBar },

  computed: {
    ...mapGetters(["cartPirce"]),
  },
};
</script>

<style scoped>
</style>