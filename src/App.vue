<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar-vue v-if="this.$route.meta.showTab"></main-tab-bar-vue>
  </div>
</template>

<script>
import MainTabBarVue from "./components/content/mainTabBar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBarVue,
  },
  created() {
    if (this.$router.path !== "/home") {
      this.$router.replace("/home");
    }
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
