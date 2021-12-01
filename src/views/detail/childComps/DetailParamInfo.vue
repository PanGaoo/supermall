<template>
  <div class="ParamInfo" v-if="Object.keys(paramInfo).length != 0">
    <div v-for="(info, index) in paramInfo.sizes" :key="index + 'A'">
      <div class="item" v-for="(item, index) in info" :key="index">
        <div v-for="(itemInfo, index) in item" :key="index">{{ itemInfo }}</div>
      </div>
    </div>
    <div
      class="info"
      v-for="(item, index) in paramInfo.infos"
      :key="index + 'B'"
    >
      <div v-for="(info, index) in item" :key="index + 1">
        {{ info }}
      </div>
    </div>
    <img :src="paramInfo.image" />
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.item {
  text-align: center;
  display: flex;
  font-size: 12px;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
.item div {
  flex: 1;
}
.info {
  padding: 5px 0;
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #eee;
}
.info div:first-child {
  text-align: center;
  flex: 1;
}
.info div:last-child {
  flex: 4;
}
.ParamInfo {
  border-top: 4px solid #eee;
  border-bottom: 4px solid #eee;
}
</style>