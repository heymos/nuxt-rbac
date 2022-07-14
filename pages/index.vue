<template>
  <div class="columns">

    <sidebar>
      <ul>
        <li></li>
      </ul>
    </sidebar>

    <main>
      <h2>Products</h2>

      <div class="admin">
        <div class="item">
          <img src="" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div class="manager">

      </div>

      <div class="user">

      </div>
    </main>

  </div>
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

<style>
</style>