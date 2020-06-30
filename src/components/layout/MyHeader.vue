<template>
  <div class="app-head">
    <div class="app-head-inner">
      <router-link :to="{path: '/'}" class="head-logo">
        <img src="../../assets/logo.png">
      </router-link>
      <div class="head-nav">
        <ul class="nav-list">
          <li @click="showDialog('isShowLogin')">登录</li>
          <li class="nav-pile">|</li>
          <li @click="showDialog('isShowReg')">注册</li>
          <li class="nav-pile">|</li>
          <li @click="showDialog('isShowAbout')">关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data: function () {
      return {
        isShowAbout: false,
        isShowLogin: false,
        isShowReg: false
      }
    },
    methods: {
      showDialog (param) {
        this[param] = true
      },
      hideDialog (param) {
        this[param] = false
      }
    }
  }
</script>
<style lang="less" scoped>
  .app-head {
    position: absolute;
    top:0;
    background: #363636;
    color: #b2b2b2;
    height: 50px;
    line-height: 50px;
    width: 100%;
    &-inner {
      width: 1200px;
      margin: 0 auto;
    }
  }
  .head{
    &-logo {
      position: absolute;
      left: 30px;
      height: 50px;
      line-height: 50px;
      img {
        width: 35px;
        margin-top: 7.5px;
      }
    }
    &-nav {
      float: right;
      ul {
        overflow: hidden;
      }
      li {
        cursor: pointer;
        float: left;
        margin-right: 10px;
      }
    }
  }
</style>
