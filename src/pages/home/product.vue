<template>
  <div>
    <div v-for="product in productList">
      <h3>{{ product.title}}</h3>
      <ul>
        <li v-for="item in product.list">
          <a :href="item.url">{{ item.name }}</a>
          <span v-if="item.hot" class="hot-tag">HOT</span>
        </li>
      </ul>
      <div v-if="!product.last" class="hr"></div>
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

<style scoped>

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
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
  }

</style>
