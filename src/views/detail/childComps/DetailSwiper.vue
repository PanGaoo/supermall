<template>
  <div class="swiper" v-if="Object.keys(topImages).length != 0">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in topImages" :key="index">
        <div class="lunbo">
          <div class="imgDiv">
            <img v-lazy="item" />
          </div>
        </div>
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
          el: ".swiper-pagination", //与slot="pagination"处 class 一致
          clickable: true, //轮播按钮支持点击
        },
        autoplay: {
          delay: 3000, //自动切换的时间间隔，单位ms
          disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
        },
      },
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    swiper,
    swiperSlide,
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
.lunbo {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.imgDiv {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>