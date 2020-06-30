<template>
  <div>
    <my-header></my-header>
    <div class="content">
      <!--<router-view/>-->
      111
    </div>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import MyHeader from './components/layout/MyHeader.vue';
  import MyFooter from './components/layout/MyFooter.vue';

  export default {
    name: 'App',
    components: {MyHeader,MyFooter},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './less/common.less';
  .content{
    margin:50px 0;
  }
</style>
