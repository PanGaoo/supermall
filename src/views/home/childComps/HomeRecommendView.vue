<template>
  <div class="recommends">
    <div v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img v-lazy="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommends {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 0.9375rem;
  padding: 5% 0 5%;
  border-bottom: 10px solid #eee;
}
.recommends img {
  width: 4.6875rem;
  height: 4.6875rem;
}
.recommends div div {
  margin-top: 10%;
}
</style>