<template>
  <div class="goods-item" @click="itemClick">
    <img v-if="this.goodsItem.show" v-lazy="this.goodsItem.show.img" />
    <img v-else v-lazy="this.goodsItem.image" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <div>
        <span class="price">{{ goodsItem.price }}</span
        >&nbsp;&nbsp;&nbsp;
        <img src="~assets/img/common/collect.svg" />
        <span class="cfav">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      this.$router.push("/detail" + this.goodsItem.iid);
    },
  },
};
</script>

<style>
.img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.goods-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 6px;
  background: #ffffff;
  width: 48%;
  margin-top: 10px;
}
.goods-item > img {
  border-radius: 6px 6px 0 0;
  min-height: 267px;
}
.goods-info {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.goods-info div {
  display: flex;
  margin-top: 5px;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 10px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 15px;
  line-height: 15px;
  font-size: 13px;
  padding: 2px;
}
.price {
  color: var(--color-high-text);
}
.goods-info img {
  width: 14px;
  height: 14px;
}
</style>