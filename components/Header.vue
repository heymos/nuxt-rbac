<template>
  <header>

    <p>{{user.name}}</p>
    <p>{{user.role}}</p>

  </header>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {

    middleware: 'auth',

    computed: {
      ...mapGetters({
        user: "session/hasData"
      })
    }

  }
</script>