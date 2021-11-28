<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
      z-index="2"
    />

    <van-tabs
      v-model="active"
      scrollspy
      color="var(--color-tint)"
      sticky
      offset-top="46px"
    >
      <van-tab title="商品">
        <detail-swiper :topImages="this.topImages"></detail-swiper>
        <detail-base-info :goods="this.goods"></detail-base-info>
        <detail-shop-info :shop="this.shop"></detail-shop-info>
      </van-tab>
      <van-tab title="参数">
        <ul>
          <li>测试1</li>
          <li>测试2</li>
          <li>测试3</li>
          <li>测试4</li>
          <li>测试5</li>
          <li>测试6</li>
          <li>测试7</li>
          <li>测试8</li>
          <li>测试9</li>
          <li>测试10</li>
        </ul>
      </van-tab>
      <van-tab title="评价">
        <ul>
          <li>测试1</li>
          <li>测试2</li>
          <li>测试3</li>
          <li>测试4</li>
          <li>测试5</li>
          <li>测试6</li>
          <li>测试7</li>
          <li>测试8</li>
          <li>测试9</li>
          <li>测试10</li>
        </ul>
      </van-tab>
      <van-tab title="推荐">
        <ul>
          <li>测试1</li>
          <li>测试2</li>
          <li>测试3</li>
          <li>测试4</li>
          <li>测试5</li>
          <li>测试6</li>
          <li>测试7</li>
          <li>测试8</li>
          <li>测试9</li>
          <li>测试10</li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getDetail, Goods, Shop } from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
export default {
  data() {
    return {
      iid: null,
      active: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
    };
  },
  components: {
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
  created() {
    // 1. 获取传入的商品id
    this.iid = this.$route.params.id;
    // 2. 根据id请求数据
    getDetail(this.iid).then((res) => {
      //因为result需要多次使用所以将其定义为常量
      const data = res.result;
      console.log(data);
      // 1. 获取顶部轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 2. 获取商品信息数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3. 获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4. 获取商品详细信息
      this.detailInfo = data.detailInfo;
      console.log(this.detailInfo);
    });
  },
};
</script>

<style>
</style>