export const state = () => ({
  errors: {
    incorrectLogin: {
      id: "1",
      description: "Неверный логин или пароль",
    },
  }
})

export const getters = {
  getErrors: s => s.errors
}