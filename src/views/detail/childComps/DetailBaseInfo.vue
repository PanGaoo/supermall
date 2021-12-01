<template>
  <div v-if="Object.keys(goods).length != 0">
    <div
      style="margin: 10px; overflow: hidden; color: #000"
      class="van-multi-ellipsis--l2"
    >
      {{ goods.title }}
    </div>
    <div class="priceBox">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice" v-if="goods.oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service" v-if="goods.services">
      <span v-for="(item, index) in goods.services.length - 1" :key="index">
        <img v-lazy="goods.services[index].icon" />
        <span>{{ goods.services[index].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: Object,
    default() {
      return {};
    },
  },
};
</script>
    
<style>
.priceBox {
  margin: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.newPrice {
  font-size: 20px;
  color: #ff8198;
  text-align: center;
  line-height: 27px;
}
.oldPrice {
  font-size: 12px;
  text-decoration: line-through;
  line-height: 27px;
  margin-left: 5px;
}
.discount {
  background: #ff6e7f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #bfe9ff,
    #ff6e7f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #bfe9ff,
    #ff6e7f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  padding: 1px 8px;
  margin-left: 5px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  margin: 5px;
}
.info-service {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0px;
  border-bottom: 2px solid #eee;
  border-top: 2px solid #eee;
}
.info-service span {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;
  font-size: 14px;
}
.info-service img {
  width: 14px;
  height: 14px;
}
</style>