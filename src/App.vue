<template>
  <div style="height: 100%">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
  import MyHeader from './components/MyHeader.vue';
  import MyFooter from './components/MyFooter.vue';

  export default {
    name: 'App',
    components: {MyHeader, MyFooter},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './less/common.less';
  @import './less/default.less';

  .el-header {
    height: @head-height !important;
    line-height: @head-height;
  }

  .el-footer, .el-header {
    padding: 0;
  }
</style>
