export const state = () => ({

  popup: {
    display: false,
    value:   '',
    temp:    {}
  }
  
})

export const mutations = {

  updatePopupValue(state, args) {
    state.popup.display = true;
    state.popup.value =   args.newPopupValue;
    state.popup.temp =    args.productData
  },

  resetPopup(state, args) {
    state.popup.display = false;
    state.popup.value =   '';
    state.popup.temp =    {}
  },

}

export const actions = {

  async loadNewPopupValue({commit}, args) {
    commit('updatePopupValue', args);
  },

  async closePopup({commit}) {
    commit('resetPopup');
  },

}

export const getters = {

  getPopup: s => s.popup,

}