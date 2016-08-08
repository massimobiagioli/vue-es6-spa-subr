import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex);

const state = {
  count: 0
};

export const mutations = {
  INCREMENT (state, amount) {
    state.count = state.count + amount;
  },
  NAVIGATE_TO (state, path) {
    router.go({path});
  }
}

export default new Vuex.Store({
  state,
  mutations
})