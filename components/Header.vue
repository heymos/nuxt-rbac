<template>
  <header>

    <p>{{user.name}}</p>
    <p>{{user.role}}</p>
    <button @click="onSubmit();closePopup()">Logout</button>

  </header>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {

    computed: {
      ...mapGetters({
        user: "session/userData",
      })
    },

    methods: {

      onSubmit () {
        this.$store.dispatch("session/logout")
        this.$router.push('/login')
      },

      closePopup () {
        this.$store.dispatch("popup/closePopup")
      },

    }

  }
</script>