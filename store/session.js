export const state = () => ({

  token: null,
  userData: {}

})

export const mutations = {

  setToken(state, token) {
    state.token = token;
  },

  clearTocken(state) {
    state.token = null;
  },

  updateUserData(state, newUserData) {
    state.userData = newUserData;
  },

}

export const actions = {

  async login({commit}, userId) {
    commit('setToken', 'truetoken')
  },

  async logout({commit}) {
    commit('clearTocken')
  },

  async loadUserData({commit}, newUserData) {
    console.log(newUserData)
    commit('updateUserData', newUserData)
  },

}

export const getters = {

  hasToken: s => !!s.token,
  hasData: s => s.userData
  
}