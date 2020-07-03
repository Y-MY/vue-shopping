<template>
  <div style="padding: 20px 0;">
    <div v-for="product in productList">
      <h3>{{ product.title}}</h3>
      <ul>
        <li v-for="item in product.list">
          <a :href="item.url">{{ item.name }}</a>
          <span v-if="item.hot" class="hot-tag">HOT</span>
        </li>
      </ul>
      <div v-if="product.noLast" class="hr"></div>
    </div>
  </div>
</template>

<script>
  import {productList} from './data';

  export default {
    data() {
      return {
        productList: productList
      }
    }
  }
</script>

<style lang="less" scoped>

  .index-left-block {
    .hr {
      margin-bottom: 20px;
      border-top: 1px solid #ccc;
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
      padding: 10px 5px;
    }
  }


  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .hot-tag {
    background: red;
    color: #fff;
    padding: 2px 5px;
    border-radius: 10px;
    font-size: 10px;
  }

</style>
