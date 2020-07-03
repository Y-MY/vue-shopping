<template>
  <div class="app-foot">
    <p>© 2020 Y-MY MIT</p>
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
  .app-foot {
    height: 50px;
    width: 100%;
    line-height: 50px;
    background: #e3e4e8;
    clear: both;
    text-align: center;
  }
</style>
