import { createStore } from 'vuex';

const store = createStore({
    state() {
      return {
        titleColor: '#FFFFFF',
        backgroundColor: '#0D2B33',
        tanBarColor:'#409D7E',
        itemBackgroundColor:'#FFFFFF',
        itemTextColor:'#181818',
        font:'saira',
        instagram:'https://www.instagram.com/ezy.connect?igsh=NTl3cG9oZzVwbjVz',
        website:'https://ezy.company/cv.menu',
        location:'https://www.google.com/maps',
        phoneNumber:'+989354886180',
        chosenCurrency:6,
        title:'Top time cafe',
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
      setFont(state,payload){
        state.font = payload;
      },
      setInstagram(state,payload){
        state.instagram = payload;
      },
      setWebsite(state,payload){
        state.website = payload;
      },
      setLocation(state,payload){
state.location = payload;
      },
      setPhoneNumber(state,payload){
        state.phoneNumber = payload;
      },
      setCurrency(state,payload){
        state.chosenCurrency = payload;
      },
      setTitle(state,payload){
        state.title = payload;
      }
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
        font:(state)=> state.font,
        instagram:(state)=>state.instagram,
        website:(state)=> state.website,
        location:(state)=> state.location,
        phoneNumber:(state)=> state.phoneNumber,
        chosenCurrency:(state)=> state.chosenCurrency,
        title:(state)=> state.title,
    }
  });
  
  export default store;