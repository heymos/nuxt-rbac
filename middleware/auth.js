export default function ({ store, redirect }) {

  if (!store.getters["session/hasToken"]) {
    redirect("/login")
  }
}