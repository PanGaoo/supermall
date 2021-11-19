<template>
   <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style>
#tab-bar{
    display: flex;
    justify-content: space-around;
    background-color: #cecccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(0,0,0,.2);
    
  }
</style>