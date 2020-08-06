<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" custom-class="custom-dialog" @close="handleClose">
      <div slot="title">
        <slot name="title">提示</slot>
      </div>
      <slot name="content">empty</slot>
    </el-dialog>
  </div>

</template>
<script>
  export default {
    props: ['isShow'],
    data() {
      return {
        dialogVisible: this.isShow
      }
    },
    watch: {
      isShow(newVal,oldVal){
        this.dialogVisible = newVal;
      }
    },
    methods: {
      handleClose() {
        this.$emit('dialog-close')
      }
    }
  };
</script>
<style lang="less">
  .custom-dialog {
    .el-dialog__header {
      background: #4fc08d;
    }

    text-align: left;
    font-size: 18px;
    overflow: hidden;
    color: #ffffff;

    i {
      color: #fff !important;
      font-size: 20px;
      line-height: 50px;
    }
  }

  .dialog-footer {
    text-align: left;
    font-size: 14px;
    font-weight: 700;
  }
</style>




