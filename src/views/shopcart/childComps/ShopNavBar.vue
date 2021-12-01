<template>
  <div>
    <van-nav-bar placeholder fixed z-index="2"
      ><div slot="title">购物车({{ cartLength }})</div></van-nav-bar
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style>
</style>