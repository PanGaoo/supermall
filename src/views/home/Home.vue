<template>
    <div id="home">
      <van-nav-bar title="购物街" z-index="99" fixed placeholder />
      <van-list
        v-model="loading"
        :finished="finished"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        finished-text="没有更多了"
        :immediate-check="false"
        @load="onLoad"
        style="margin-bottom: 49px"
      >
        <Home-swiper :banners="banners"></Home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <home-featrue-view></home-featrue-view>
        <tab-control
          :titles="['流行', '新款', '精选']"
          class="tab-control"
          @tabClick="tabClick"
        ></tab-control>
        <goods-list :goods="showGoods"></goods-list>
        <div style="height: 50px" slot="loading">
          <div>
            <van-loading style="background-color: #f2f2f2" size="20px"
              >加载中...</van-loading
            >
          </div>
        </div>
      </van-list>
    </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatrueView from "./childComps/HomeFeatrueView";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        //分别存储流行、新款、精选的数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      loading: false,
      finished: false,
      error: false,
    };
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatrueView,
    TabControl,
    GoodsList,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     *事件监听相关方法
     */

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    async onLoad() {
      //请求数据
      const page = this.goods[this.currentType].page + 1;
      const res = await getHomeGoods(this.currentType, page);
      this.goods[this.currentType].list.push(...res.data.list);
      this.goods[this.currentType].page += 1;
      //请求完成将加载状态设置为等待加载
      this.loading = false;
      //加载状态结束判断数据是否全部加载完毕，如果全部加载完毕则不会再触发加载事件
      if (this.goods[this.currentType].page === 5) {
        this.finished = true;
      }
    },
  }
};
</script>

<style>
.home-name {
  background: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>