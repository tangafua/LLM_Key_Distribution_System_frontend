import { createStore } from 'vuex';

export default createStore({
  state: {
    type: '',
    username: ''
  },
  mutations: {
    setUser(state, payload) {
      state.type = payload.type;
      state.username = payload.username;
    },
    logout(state) {
      state.type = '';
      state.username = '';
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('logout');
    }
  }
});
