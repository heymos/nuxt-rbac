<template lang='pug'>

aside( v-if="data.role !== 'user'" )
  h2= 'Users:'

  ul
    li( v-for='user in users' :key='user.id' )
      .text
        span= 'ID: {{ user.id }}'
        p= '{{ user.name }}'
        p.mark= '{{ user.role }}'

      .buttons( v-if="( data.role == 'admin' )&&( user.role !== 'admin' )" )
        button( @click="setRole( user.id, 'manager' )" )= 'Manager'
        button( @click="setRole( user.id, 'user' )" )= 'User'

</template>

<style lang='stylus' src='../assets/sidebar.stylus'></style>

<script>
  import { mapGetters } from 'vuex';

  export default {

    computed: {
      ...mapGetters({
        users: 'users/getUsers',
        data:  'session/userData',
      })
    },

    methods: {

      setRole(userId, newRole) {
        this.$store.dispatch('users/loadNewRole', {userId, newRole});
      },

    },

  }
</script>