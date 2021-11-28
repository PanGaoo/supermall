<template>
  <div style="border-bottom: 4px solid #eee" v-if="shop">
    <div class="shopName">
      <van-image
        round
        width="40px"
        height="40px"
        :src="shop.logo"
        style="border: 1px solid rgba(0, 0, 0, 0.1)"
      />
      <span style="margin-left: 15px; font-size: 14px">{{ shop.name }}</span>
    </div>
    <div class="shopNum">
      <div class="shopNum_1">
        <div>
          <p>{{ shop.sells | sellCountFilter }}</p>
          <p style="font-size: 12px">总销量</p>
        </div>
        <div>
          <p>{{ shop.goodsCount }}</p>
          <p style="font-size: 12px">全部宝贝</p>
        </div>
      </div>
      <div class="shopNum_2">
        <div v-for="(item, index) in shop.score" :key="index" class="shopScore">
          <div>{{ item.name }}</div>
          <div :class="{ 'score-better': item.isBetter }">{{ item.score }}</div>
          <p :class="{ 'better-more': item.isBetter }">
            {{ item.isBetter ? "高" : "低" }}
          </p>
        </div>
      </div>
    </div>
    <div class="button">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
  props: {
    shop: Object,
    default() {
      return {};
    },
  },
};
</script>

<style scoped>
.shopName {
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0px 10px;
}
.shopNum {
  display: flex;
  text-align: center;
}
.shopNum > div {
  flex: 1;
}
.shopNum_1 {
  display: flex;
  justify-content: space-evenly;
  border-right: 1px solid #ddd;
}
.shopNum_1 > div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.shopScore {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 20px;
  font-size: 13px;
  text-align: left;
}
.shopScore > div:first-child {
  flex: 2;
}
.shopScore > div:nth-child(2) {
  color: green;
  flex: 1;
}
.shopScore p {
  color: green;
}
.score-better {
  color: red !important;
}

.better-more {
  color: red !important;
}
.button {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.button div {
  height: 28px;
  width: 120px;
  color: #fff;
  border-radius: 4px;
  line-height: 28px;
  font-size: 14px;
  background: #c6ffdd; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>