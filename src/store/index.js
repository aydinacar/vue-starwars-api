import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allPosts: [],
    post: {}
  },
  mutations: {
    setPosts(state, posts) {
      state.allPosts = posts
    },
    setPost(state, post) {
      state.post = post
    }
  },
  actions: {
    async setPosts(context) {
     const response = await fetch("https://akabab.github.io/starwars-api/api/all.json")
     const data = await response.json()
     context.commit('setPosts', data)
     console.log(data)
    },

    async setPost(context,id) {
      const response = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
      const data = await response.json()
      context.commit('setPost', data)
      console.log(data)
     }
  },
  getters: {
    getPosts(state) {
      return state.allPosts
    },
    getPost(state) {
      return state.post
    }
  },
  modules: {
  }
})
