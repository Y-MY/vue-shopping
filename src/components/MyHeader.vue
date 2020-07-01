<template>
  <div class="app-head">
    <div class="app-head-inner">
      <span>
        您好<!--，欢迎来到农蔬疏助农平台-->
        [<router-link :to="{path: '/login'}" class="app-head-link">登录</router-link>]
        [<router-link :to="{path: '/register'}" class="app-head-link">注册</router-link>]
      </span>
      <span class="app-head-nav">
        <el-menu :default-active="activeIndex" mode="horizontal"
                 background-color="@head-background-color"
                 @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link :to="{path: '/'}" class="app-head-link">首页</router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">购物中心</template>
            <el-menu-item index="2-1">我的订单</el-menu-item>
            <el-menu-item index="2-2">我的收藏</el-menu-item>
            <el-menu-item index="2-3">我的购物车</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">网站导航</template>
            <el-menu-item index="3-1">新鲜蔬菜</el-menu-item>
            <el-menu-item index="3-2">新鲜水果</el-menu-item>
            <el-menu-item index="3-3">粮油调味</el-menu-item>
            <el-menu-item index="3-3">食品酒水</el-menu-item>
            <el-menu-item index="3-3">畜牧禽蛋</el-menu-item>
            <el-menu-item index="3-3">水产海鲜</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">消息中心</el-menu-item>
          <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <!-- <ul>
          <router-link :to="{path: '/'}" class="app-head-link">
            <li @click="showDialog('isShowLogin')">首页</li>
          </router-link>
          <li class="nav-pile">|</li>
          <el-dropdown>
            <span class="el-dropdown-link">
              购物中心
              <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的订单</el-dropdown-item>
              <el-dropdown-item>我的收藏</el-dropdown-item>
              <el-dropdown-item>我的购物车</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <li class="nav-pile">|</li>
          <el-dropdown>
            <span class="el-dropdown-link">
              网站导航
              <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>新鲜蔬菜</el-dropdown-item>
              <el-dropdown-item>新鲜水果</el-dropdown-item>
              <el-dropdown-item>粮油调味</el-dropdown-item>
              <el-dropdown-item>食品酒水</el-dropdown-item>
              <el-dropdown-item>畜牧禽蛋</el-dropdown-item>
              <el-dropdown-item>水产海鲜</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <li class="nav-pile">|</li>
          <li @click="showDialog('isShowLogin')">消息</li>
        </ul>-->
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data: function () {
      return {
        isShowAbout: false,
        isShowLogin: false,
        isShowReg: false,
        activeIndex: '1'
      }
    },
    methods: {
      showDialog(param) {
        this[param] = true
      },
      hideDialog(param) {
        this[param] = false
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../less/default.less';

  .el-dropdown {
    color: #333;
    float: left;
    padding: 0 5px;

    &:hover {
      background: #ffffff;
      color: @red-color;
    }
  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .el-menu--horizontal > .el-menu-item,
  .app-head-nav ul,
  .el-menu--horizontal > .el-submenu {
    height: @head-height;
    line-height: @head-height;
  }

  .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 30px !important;
    line-height: 30px !important;
    background-color:@head-background-color !important;;
  }

  .app-head {
    height: 100%;
    background: @head-background-color;
    color: #333333;
    line-height: @head-height;

    &-inner {
      width: 1200px;
      margin: 0 auto;
    }

    &-link {
      cursor: pointer;

      &:hover {
        color: @red-color;
      }
    }

    &-nav {
      float: right;

      ul {
        background: @head-background-color;
        overflow: hidden;
      }

      li {
        cursor: pointer;
        float: left;
        margin: 0 5px;
      }
    }
  }
</style>
