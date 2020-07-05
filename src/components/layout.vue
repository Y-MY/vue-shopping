<template>
  <div class="index-wrap">
    <div class="index-left">
      <slot name="left"></slot>
    </div>
    <div class="index-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index {
    &-left {
      float: left;
      width: 300px;
      text-align: left;
    }

    &-right {
      float: left;
      width: calc(100% - 320px);
    }
  }
</style>

