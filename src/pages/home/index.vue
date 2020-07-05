<template>
  <myLayout>
    <div slot="left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <my-product></my-product>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div slot="right">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <my-board></my-board>
    </div>
  </myLayout>
</template>

<script>
  import myLayout from '../../components/layout.vue'
  import slideShow from './slideShow'
  import myProduct from './product'
  import myBoard from './board'
  import {slides, boardList, newsList} from './data';

  export default {
    components: {
      myLayout,
      slideShow,
      myProduct,
      myBoard
    },
    created() {
      this.$http.get('api/getNewList')
        .then((res) => {
          this.newsList = res.data;
        }, (err) => {
          console.log('error', err)
        });
      this.$http.post('api/getOrderList', {userId: 123})
        .then((res) => {
          //this.newsList = res.data
          console.log(res)
        }, (err) => {
          console.log('error', err)
        });
    },
    data() {
      return {
        invTime: 2000,
        slides: slides,
        boardList: boardList,
        newsList: newsList,
      }
    }
  }
</script>

<style lang="less" scoped>

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    h2 {
      background: #4fc08d;
      color: #fff;
      padding: 10px 15px;
    }

    h3 {
      padding: 0 15px 5px 15px;
      font-weight: bold;
      color: #222;
    }

    ul {
      padding: 20px 15px;
    }

    li {
      padding: 10px 0;
    }
  }

  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
