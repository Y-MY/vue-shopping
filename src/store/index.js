import Vue from 'vue';
import Vuex from 'vuex'
import productList from './modules/productList';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  modules: {
    productList
  },
  getters: {},
  actions: {},
  mutations: {}
})
