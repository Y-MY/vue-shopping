import Vue from 'vue';
import {productList} from './data'
//存放数据
const state = {
  productList: [],
  params: {}
};
//页面调用state的值
const getters = {
  getProductList: state => state.productList,
};

//异步请求
const actions = {
  fetchProductList({commit, state}) {
    /* this.$http.post('/api/getProductList', state.params).then((res) => {
       //commit('updateProductList', res.data.list);
       commit('updateProductList',productList);
     }, (err) => {

     })*/
    console.log(state.params);
    commit('updateProductList', productList);
  }
};

//只允许mutations进行state的修改，不允许actions对state进行修改
const mutations = {
  updateProductList(state, payload) {
    state.productList = payload;
  },
  updateParams(state, {key, value}) {
    state.params[key] = value;
  }
};

export default {
  state, getters, actions, mutations,
}
