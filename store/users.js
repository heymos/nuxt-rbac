export const state = () => ({
  users: [
    {
      id: "1",
      name: "Andrey",
      login: "admin@example.com",
      password: "123",
      role: "admin",
    },
    {
      id: "2",
      name: "Kseniya",
      login: "user01@example.com",
      password: "123",
      role: "manager",
    },
    {
      id: "3",
      name: "Vasya",
      login: "user02@example.com",
      password: "123",
      role: "user",
    },
  ]
})

export const mutations = {

  updateRole(state, args) {
    state.users.find( user => user.id === args.userId ).role = args.newRole
  },

}

export const actions = {

  async loadNewRole({commit}, args) {
    commit('updateRole', args)
  },

}

export const getters = {
  getUsers: s => s.users
}