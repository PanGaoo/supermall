<template>
  <div v-if="Object.keys(detailInfo).length != 0">
    <div class="shopInfo">
      <div class="van-multi-ellipsis--l3">{{ detailInfo.desc }}</div>
      <div style="text-align: center; margin: 5px 0px">
        {{ detailInfo.detailImage[0].key }}
      </div>
      <div class="imageDiv">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" v-lazy="item" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shopInfo {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 10px 5px;
}
.imageDiv{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>