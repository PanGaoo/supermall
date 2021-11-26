<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 99;
}
</style>