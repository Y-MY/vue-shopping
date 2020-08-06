<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="showOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="hideFailDialog">
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
  import Dialog from '../../../components/dialog'

  export default {
    components: {
      thisDialog: Dialog
    },
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: {
        type: [String, Number]
      }
    },
    data() {
      return {
        isShowSuccessDialog: false,
        isShowFailDialog: false
      }
    },
    methods: {
      checkStatus() {
        this.$http.post('/api/checkOrder', {
          orderId: this.orderId
        })
          .then((res) => {
            this.isShowSuccessDialog = true;
            this.$emit('on-close-check-dialog')
          }, (err) => {
            this.isShowFailDialog = true;
            this.$emit('on-close-check-dialog')
          })
      },
      showOrderList() {
        this.isShowSuccessDialog = false;
        this.isShowFailDialog = false;
        this.$router.push({path: '/orderList'})
      },
      hideFailDialog() {
        this.isShowFailDialog = false;
      }
    }
  }
</script>

<style scoped lang="less">

  .button {
    background: #4fc08d;
    color: #fff;
    width: 100px;
    padding: 10px 15px;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
  }
</style>
