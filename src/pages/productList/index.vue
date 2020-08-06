<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期：
        <v-date-picker @on-change="getStartDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        结束日期：
        <v-date-picker @on-change="getEndDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">{{ head.label }}
          </th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import VSelection from '../../components/selection'
  import VDatePicker from '../../components/datepicker'
  import {products, tableHeads, orderList} from './data'
  import _ from 'lodash'

  export default {
    components: {
      VSelection,
      VDatePicker
    },
    data() {
      return {
        query: '',
        productId: 0,
        startDate: '',
        endDate: '',
        products: products,
        tableHeads: tableHeads,
        currentOrder: 'asc',
        // tableData: []
      }
    },
    watch: {
      query() {
        this.getList()
      }
    },
    computed: {
      tableData() {
        //return this.$store._modules.productList.getters.getProductList()
        return this.$store.getters.getProductList
      }
    },
    mounted() {
      this.$store.dispatch('fetchProductList');
      console.log(this.$store)
    },
    methods: {
      productChange(obj) {
        this.$store.commit('updateParams',{key:'productId',value:obj.value});
        this.$store.dispatch('fetchProductList');
      },
      getStartDate(date) {
        this.$store.commit('updateParams',{key:'startDate',value:date});
        this.$store.dispatch('fetchProductList');
      },
      getEndDate(date) {
        this.$store.commit('updateParams',{key:'endDate',value:date});
        this.$store.dispatch('fetchProductList');
      },
      getList() {
        let reqParams = {
          query: this.query,
          productId: this.productId,
          startDate: this.startDate,
          endDate: this.endDate
        };
        this.$http.post('/api/getOrderList', reqParams)
          .then((res) => {
            this.tableData = orderList
          }, (err) => {

          })
      },
      changeOrderType(headItem) {
        this.tableHeads.map((item) => {
          item.active = false;
          return item
        });
        headItem.active = true;
        if (this.currentOrder === 'asc') {
          this.currentOrder = 'desc'
        } else if (this.currentOrder === 'desc') {
          this.currentOrder = 'asc'
        }
        this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
      }
    }

  }
</script>

<style scoped>
  .order-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }

  .order-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .order-query {
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    outline: none;
    text-indent: 10px;
  }

  .order-list-option {
    display: inline-block;
    padding-left: 15px;
  }

  .order-list-option:first-child {
    padding-left: 0;
  }

  .order-list-table {
    margin-top: 20px;
  }

  .order-list-table table {
    width: 100%;
    background: #fff;
  }

  .order-list-table td,
  .order-list-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
  }

  .order-list-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    cursor: pointer;
  }

  .order-list-table th.active {
    background: #35495e;
  }
</style>
