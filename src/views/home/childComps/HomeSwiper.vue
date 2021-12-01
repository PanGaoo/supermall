<template>
  <div class="swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <div class="imgDiv">
            <img :src="item.image" v-lazy="item.image"/>
          </div>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',  //与slot="pagination"处 class 一致
          clickable: true, //轮播按钮支持点击
          dynamicBullets: true,
        },
        autoplay: {
          delay: 3000, //自动切换的时间间隔，单位ms
          disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.imgDiv {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>