<template>
  <div class="index-board-list">
    <div
      class="index-board-item"
      v-for="(item, index) in boardList"
      :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.image]">
      <div class="index-board-item-inner">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <div class="index-board-button">
          <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {boardList} from './data';

  export default {
    data() {
      return {
        boardList: boardList
      }
    }
  }
</script>

<style lang="less">

  .index-board-list {
    overflow: hidden;
  }
  .index-board-button{
    background: #4fc08d;
    color: #fff;
    width: 100px;
    padding: 10px 15px;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
  }

  .index-board-item {
    float: left;
    width: 390px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
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

</style>
