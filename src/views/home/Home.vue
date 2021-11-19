<template>
  <div id="home">
    <nav-bar class="home-name"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home";
import {Swiper, SwiperItem} from "components/common/swiper"

export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
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