<template>
  <div class="app-head">
    <div class="app-head-inner">
      <router-link :to="{path: '/'}" class="app-head-logo">
        <img src="../../../assets/logo.png">
        <div class="app-head-logo-title">vue-shopping</div>
      </router-link>
      <div class="app-head-nav">
        <ul class="app-nav-list" v-if="nickname=== ''">
          <li @click="showDialog('isShowLogin')">登录</li>
          <li class="app-nav-pile">|</li>
          <li @click="showDialog('isShowReg')">注册</li>
          <li class="app-nav-pile">|</li>
          <li @click="showDialog('isShowAbout')">关于</li>
          <li class="app-nav-pile">|</li>
          <router-link :to="{path: '/productList'}">
            <li>产品</li>
          </router-link>
          <li class="app-nav-pile">|</li>
          <router-link :to="{path: '/orderList'}">
            <li>订单</li>
          </router-link>
        </ul>
        <div class="app-nav-list" v-if="nickname!== ''">
          <span class="nickname"> {{ nickname }}</span>
          <!-- <img src="../assets/header.jpg" class="headerImage">-->
          <el-dropdown @command="handleCommand">
            <div>
              <img src="../../../assets/header.jpg"/>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <my-dialog :is-show="isShowAbout" @dialog-close="hideDialog('isShowAbout')">
      <div slot="title">
        关于
      </div>
      <div slot="content">
        <p>
          本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
        </p>
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowLogin" @dialog-close="hideDialog('isShowLogin')">
      <div slot="title">
        登录
      </div>
      <div slot="content">
        <login-form @on-success="loginSuccess" @on-error=""></login-form>
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowReg" @dialog-close="hideDialog('isShowReg')">
      <div slot="title">
        注册
      </div>
      <div slot="content">
        <register-form @on-success="loginSuccess" @on-error=""></register-form>
      </div>
    </my-dialog>
  </div>
</template>

<script>
  import myDialog from '../../../components/myDialog';
  import loginForm from '../../login/loginForm';
  import registerForm from '../../register/registerForm';

  export default {
    components: {myDialog, loginForm, registerForm},
    data: function () {
      return {
        isShowAbout: false,
        isShowLogin: false,
        isShowReg: false,
        nickname: '',
        headerImage: ''
      }
    },
    methods: {
      showDialog(param) {
        this[param] = true;
      },
      hideDialog(param) {
        this[param] = false
      },
      loginSuccess(res) {
        this.hideDialog('isShowLogin');
        this.nickname = res.nickname;
      },
      handleCommand(command) {
        this.nickname = "";
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../less/default";

  .el-dropdown {
    div {
      outline: 0;
      height: @head-height;

      .el-avatar--circle {
        margin-top: 5px
      }
    }

    img {
      width: @head-image-height;
      height: @head-image-height;
      border-radius: @head-image-height;
      margin-top: (@head-height - @head-image-height)/2;
    }
  }

  .app-head {
    position: absolute;
    top: 0;
    background: #363636;
    color: #b2b2b2;
    height: @head-height;
    line-height: @head-height;
    width: 100%;

    &-inner {
      width: 1200px;
      margin: 0 auto;
      overflow: auto;
    }

    &-logo {
      position: relative;
      left: 15px;
      height: @head-height;
      line-height: @head-height;

      img {
        width: 35px;
        margin-top: 7.5px;
      }

      &-title {
        margin-left: 10px;
        display: inline;
        font-size: 18px;
        font-weight: normal;
        color: #fff;
        vertical-align: top;
      }
    }

    &-nav {
      float: right;
      margin-right: 15px;

      .nickname {
        font-weight: bold;
        font-size: 16px;
        color: #fff;
        line-height: @head-height;
        height: @head-height;
        float: left;
        margin-right: 10px;
      }

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
