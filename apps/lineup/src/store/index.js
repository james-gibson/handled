import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    purchases: [{ id: 0, name: "Towels", costEst: 300, score: 100 }]
  },
  mutations: {},
  actions: {},
  modules: {}
});
