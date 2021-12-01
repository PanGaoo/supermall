<template>
  <van-tabbar v-model="active" z-index="99">
    <van-tabbar-item icon="home-o" path="/home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" path="/category" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" path="/shopcart" to="/shopcart">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" path="/profile" to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>