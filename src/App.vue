<template>
  <div style="height: 100%">
    <my-header></my-header>
    <div class="clear-position"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div></div>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import MyHeader from './components/myHeader.vue';
  import MyFooter from './components/myFooter.vue';

  export default {
    name: 'App',
    components: {MyHeader, MyFooter},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './less/common.less';
  @import './less/default.less';

  .clear-position {
    height: @head-height;

  }

  .el-header {
    height: @head-height !important;
    line-height: @head-height;
  }

  .el-footer, .el-header {
    padding: 0;
  }
</style>
