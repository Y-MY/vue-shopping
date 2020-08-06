<template>
  <div style="height: 100%" @click="resetComponent">
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
  import MyHeader from './pages/layout/header/myHeader.vue';
  import MyFooter from './pages/layout/footer/myFooter.vue';
  import {eventBus} from './eventBus';

  export default {
    name: 'App',
    components: {MyHeader, MyFooter},
    methods: {
      resetComponent() {
        eventBus.$emit('reset-component')
      }
    }
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
