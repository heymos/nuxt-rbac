<template>
  <div class="columns">
    
    <Popup></Popup>
    <Products></Products>
    <Sidebar></Sidebar>

  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {

    middleware: 'auth',

  }
</script>

<style>
  ul li {
    list-style: none;
    padding: 20px;
    background: #000;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>