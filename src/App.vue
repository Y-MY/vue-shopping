<!--
<template>
  <div class="content">
    <img src="./assets/logo.png">
    <router-view/>
  </div>

</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less" rel="stylesheet/less">
  .content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
-->
<template>
  <div>
    <p class="link" :class="className">1111</p>
    <p class="link" :class="classNameArr">1111</p>
    <p class="link" :class="[classA,classB]">1111</p>
    <p class="link" :class="[classA,{'red-font':hasError}]">1111</p>
    <p class="link" :style="linkCss">1111</p>
    <p class="link" :style="linkCss">1111</p>

    <p v-if="isPartA">partA</p>
    <p v-show="!isPartA">partB</p>

    <p v-if="isPartA">partA</p>
    <p v-else>no data</p>

    <button v-on:click="toggle">toggle</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        className: {
          'red-font': true,
          'blue-font': false
        },
        classNameArr: ['red-font', 'big-font'],
        classA: 'big-font',
        classB: 'red-font',
        hasError: false,
        linkCss: {
          'color': 'red',
          'font-size': '30px',
        },
        isPartA:true,
      }
    },
    methods: {
      toggle(){
        this.isPartA = !this.isPartA;
      }
    }
  }

</script>

<style lang="less">
  .red-font {
    color: red;
  }

  .big-font {
    font-size: 20px;
  }
</style>
