<template>
  <div id="home">
    <nav-bar class="home-name"><div slot="center">购物街</div></nav-bar>
    <Home-swiper :banners="banners"></Home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import { getHomeMultidata } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  created() {
    //请求多个数据
    getHomeMultidata().then((res) => {
      //console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-name {
  background: var(--color-tint);
  color: #fff;
}
</style>