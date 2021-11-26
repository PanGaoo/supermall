<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  components: { GoodsItem },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #F2F2F2;
  padding: 2px;
}
</style>