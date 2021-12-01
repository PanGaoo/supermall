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
        <detail-goods-info :detailInfo="this.detailInfo"></detail-goods-info>
      </van-tab>
      <van-tab title="参数">
        <detail-param-info :paramInfo="this.paramInfo"></detail-param-info>
      </van-tab>
      <van-tab title="评论">
        <detail-comment-info
          :commentInfo="this.commentInfo"
        ></detail-comment-info>
      </van-tab>
      <van-tab title="推荐">
        <div style="margin-bottom: 50px">
          <goods-list :goods="this.recommends"></goods-list>
        </div>
      </van-tab>
    </van-tabs>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star-o" text="收藏" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addToCart"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      active: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
    };
  },
  components: {
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    GoodsList,
    DetailCommentInfo,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    addToCart() {
      // 1. 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realprice;
      product.iid = this.iid;
      product.count = 1;
      this.$store.commit("addCart", product);
    },
  },
  created() {
    this.active = 0;
    // 1. 获取传入的商品id
    console.log(this.$route.params.id);
    this.iid = this.$route.params.id;
    // 2. 根据id请求详情数据
    getDetail(this.iid).then((res) => {
      //因为result需要多次使用所以将其定义为常量
      const data = res.result;
      //console.log(data);
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
      // 5. 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6. 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 3. 根据id请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
};
</script>

<style>
</style>