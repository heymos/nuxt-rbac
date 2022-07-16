export const state = () => ({
  errors: {
    incorrectLogin: {
      id: "1",
      description: "Incorrect username or password.",
    },
  }
})

export const getters = {
  getErrors: s => s.errors
}