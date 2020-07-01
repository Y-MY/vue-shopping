<template>
  <div class="index-wrap">
    <div class="index-left">
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
    <div class="index-right">
      <!--<slide-show :slides="slides" :inv="invTime"></slide-show>-->
      11
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slideShow from '../../components/slideShow'
  import myProduct from './product'
  import {slides, boardList} from './data';

  export default {
    components: {
      slideShow,
      myProduct
    },
    created: function () {
     /* this.$http.get('api/getNewsList')
        .then((res) => {
          this.newsList = res.data
        }, (err) => {
          console.log(err)
        })*/
    },
    data() {
      return {
        invTime: 2000,
        slides: slides,
        boardList: boardList,
        newsList: [],
      }
    }
  }
</script>

<style lang="less" scoped>
  .index-wrap {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  .index {
    &-left {
      float: left;
      width: 300px;
      text-align: left;
      &-block {
        margin: 15px;
        background: #fff;
        box-shadow: 0 0 1px #ddd;
        .hr {
          margin-bottom: 20px;
        }
        h2 {
          background: #4fc08d;
          color: #fff;
          padding: 10px 15px;
          margin-bottom: 20px;
        }
        h3 {
          padding: 0 15px 5px 15px;
          font-weight: bold;
          color: #222;
        }
        ul {
          padding: 10px 15px;
        }
        li {
          padding: 5px;
        }
      }
    }
    &-right{
      float: left;
      width: calc(100% - 320px);
    }
  }

  .index-board-list {
    overflow: hidden;
  }

  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-car .index-board-item-inner {
    background: url(../../assets/images/1.png) no-repeat;
  }

  .index-board-loud .index-board-item-inner {
    background: url(../../assets/images/2.png) no-repeat;
  }

  .index-board-earth .index-board-item-inner {
    background: url(../../assets/images/3.png) no-repeat;
  }

  .index-board-hill .index-board-item-inner {
    background: url(../../assets/images/4.png) no-repeat;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .line-last {
    margin-right: 0;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .lastest-news {
    min-height: 442px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
