import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import cocktailDb from '../apis/cocktailDb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    recipeDatas: [],
    drinkDatas: {},
    recipe: {},
    favDatas: []
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
    SET_RECIPE (state, payload) {
      state.recipe = payload
    },
    SET_FAVDATA (state, payload) {
      state.favDatas = payload
    }
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
    addFav(context, payload) {
      const data = { 
        recipeName: payload.recipe.label, 
        recipeImage: payload.recipe.image
      }
      console.log(data);
      return axios({
        method: "POST",
        url: `/favourite/addFav`,
        headers: {
          access_token: localStorage.access_token
        },
        data: data
      })
    },
    fetchFav(context) {
      return axios({
        method: "GET",
        url: `/favourite`,
        headers: {
          access_token: localStorage.access_token
        },
      })
    },  
  },
  modules: {
  }
})
