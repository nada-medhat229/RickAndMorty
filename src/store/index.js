import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    characterfillter: [],
  },
  getters: {},
  mutations: {
    setcharacter(state, payload) {
      state.characters = payload;
    },
    setcharacterfillter(state, payload) {
      state.characterfillter = payload;
    },
  },
  actions: {
    async getcharacter({ commit }) {
      // const response = await fetch("https://rickandmortyapi.com/api/character");
      // console.log(response);
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data= await response.json();
        commit('setcharacter',data.results)
        commit('setcharacterfillter',data.results)
        console.log(data);

      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
