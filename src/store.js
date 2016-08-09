import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex);

const state = {
  count: 0,
  currentPerson: {}
};

export const mutations = {
  INCREMENT (state, amount) {
    state.count = state.count + amount;
  },
  NAVIGATE_TO (state, path) {
    router.go({path});
  },
  SET_CURRENT_PERSON (state, data) {
    state.currentPerson = data;    
  }
}

export default new Vuex.Store({
  state,
  mutations
})