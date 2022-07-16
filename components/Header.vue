<template lang='pug'>

header
  p= '{{ user.name }}'
  p( v-if="user.role !== 'user'" )= 'You {{ user.role }}'
  button( @click='onSubmit();closePopup()' )= 'Logout'

</template>

<style lang='stylus' src='../assets/header.stylus'></style>

<script>
  import { mapGetters } from 'vuex';

  export default {

    computed: {
      ...mapGetters({
        user: 'session/userData',
      }),
    },

    methods: {

      onSubmit () {
        this.$store.dispatch( 'session/logout' );
        this.$router.push( '/login' );
      },

      closePopup () {
        this.$store.dispatch( 'popup/closePopup' );
      },

    },

  }
</script>