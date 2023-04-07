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
    fillterByStatus({commit,state},status){
      const results=state.characters.filter((character)=>{
        return character.status.includes(status)
      })
      commit('setcharacterfillter',results)
    },
    fillterByName({commit,state},name){
      const formatname=name.toLowerCase()
      const results=state.characters.filter((character)=>{
        const charactername=character.name.toLowerCase()
        if (charactername.includes(formatname)) {
          return character 
        }
      })
      commit('setcharacterfillter',results)
    }
  },
  modules: {},
});
   
      
       
  
  