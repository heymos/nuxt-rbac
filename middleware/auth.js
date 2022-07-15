export default function ({ store, redirect }) {

  if (!store.getters["session/userToken"]) {
    redirect("/login")
  }
}