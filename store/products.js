export const state = () => ({

  products: [
    {
      id: "1",
      name: "Washing powder",
      price: 59.99,
      img: "",
    },
    {
      id: "2",
      name: "Collar for a cat",
      price: 19.49,
      img: "",
    },
    {
      id: "3",
      name: "Butterfly book",
      price: 24.99,
      img: "",
    },
    {
      id: "4",
      name: "Jeans",
      price: 109.49,
      img: "",
    },
    {
      id: "5",
      name: "Soldering kit",
      price: 99.49,
      img: "",
    },
    {
      id: "6",
      name: "Red skirt",
      price: 1.99,
      img: "",
    },
  ]
  
})

export const mutations = {

  deleteProduct(state, productId) {
    const currentProduct = state.products.find( product => product.id === productId )
    const indexProduct = state.products.indexOf(currentProduct);
    state.products.splice(indexProduct, 1);
  },

  updateProduct(state, args) {
    const productData = state.products.find( product => product.id === args.id )
    productData.name = args.name
    productData.price = args.price
  },

}

export const actions = {
  
  async removeProduct({commit}, productId) {
    commit('deleteProduct', productId)
  },
  
  async loadEditionProduct({commit}, args) {
    commit('updateProduct', args)
  },

}

export const getters = {

  getProducts: s => s.products

}