import { createStore } from 'vuex';

const store = createStore({
    state() {
      return {
        titleColor: '#FFFFFF',
        backgroundColor: '#0D2B33',
        tanBarColor:'#409D7E',
        itemBackgroundColor:'#FFFFFF',
        itemTextColor:'#181818',
      };
    },
    mutations: {
      setTitleColor(state, payload) {
        state.titleColor = payload;
      },
      setBackgroundColor(state, payload) {
        state.backgroundColor = payload;
      },
      setTanBarColor(state, payload) {
        state.tanBarColor = payload;
      },
      setItemBackgroundColor(state, payload) {
        state.itemBackgroundColor = payload;
      },
      setItemTextColor(state, payload) {
        state.itemTextColor = payload;
      },
    },
    actions: {
      updateTitleColor({ commit }, newTitleColor) {
        commit('setTitleColor', newTitleColor);
      },
      updateBackgroundColor({ commit }, newBackgroundColor) {
        commit('setBackgroundColor', newBackgroundColor);
      },
      updateTanbarColor({ commit }, newTanbarColor) {
        commit('setTanBarColor', newTanbarColor);
      },
      updateItemBackgroundColor({ commit }, newItemBackgroundColor) {
        commit('setItemBackgroundColor', newItemBackgroundColor);
      },
      updateItemTextColor({ commit }, newItemTextColor) {
        commit('setItemTextColor', newItemTextColor);
      },
    },
    getters: {
        titleColor: (state) => state.titleColor,
        backgroundColor: (state) => state.backgroundColor,
        tanBarColor: (state) => state.tanBarColor,
        itemBackgroundColor: (state) => state.itemBackgroundColor,
        itemTextColor: (state) => state.itemTextColor,
    }
  });
  
  export default store;