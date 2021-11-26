<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar-vue></main-tab-bar-vue>
  </div>
</template>

<script>
import MainTabBarVue from './components/content/mainTabBar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBarVue
  }
}
</script>

<style>
 @import "./assets/css/base.css"
</style>
