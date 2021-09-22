import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import cocktailDb from '../apis/cocktailDb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    recipeDatas: [],
    drinkDatas: {}
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_RECIPEDATA (state, payload) {
      state.recipeDatas = payload
    },
    SET_DRINKDATA (state, payload) {
      state.drinkDatas = payload
    },
  },
  actions: {
    submitLogin(context, payload) {
      return axios({
        method: "POST",
        url: "/login",
        data: payload
      })
    },
    submitRegister(context, payload) {
      return axios({
        method: "POST",
        url: "/register",
        data: payload
      }) 
    },
    fetchRecipes(context, payload) {
      return axios({
        method: "GET",
        url: `/recipe/search?keyword=${payload.keyword}`,
      })
    },  
    fetchDrinks(context) {
      return cocktailDb({
        method: "GET",
        url: `/random.php`,
      })
    },  


  },
  modules: {
  }
})
