export const state = () => ({
  errors: [
    {
      id: "1",
      description: "Неверный логин или пароль",
    },
  ]
})

export const getters = {
  getUsers: s => s.errors
}