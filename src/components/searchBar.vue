<template>
  <div>

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

  .el-dropdown-menu__item {
    &:hover {
      color: @red-color;
      background: #f7f7f7;
    }
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
        padding: 0 10px;
        &:not(.nav-pile) {
          &:hover {
            background: #fff;
            color: @red-color;
          }
        }
      }
    }
  }
</style>
