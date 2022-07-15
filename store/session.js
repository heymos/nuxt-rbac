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
    commit('updateUserData', newUserData)
  },

}

export const getters = {

  userToken: s => !!s.token,
  userData: s => s.userData
  
}