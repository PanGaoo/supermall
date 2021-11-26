<template>
  <div class="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="activeClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tabControl {
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 35px;
  line-height: 35px;
  background: #fff;
  z-index: 99;
}
.tabControl div {
  flex: 1;
}
.tabControl div span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>