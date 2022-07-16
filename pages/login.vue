<template lang='pug'>

.login
  .error( v-if='incorrectLogin' )
    p= '{{ errors.incorrectLogin.description }}'

  form( @submit.prevent='onSubmit' )
    input( type='text' placeholder='your login...' v-model='login' )
    input( type='text' placeholder='your password...' v-model='password' )
    button( type='submit' )= 'Log In'

  .note
    p= 'admin@example.com'
    p= 'user01@example.com'
    p= 'user02@example.com'
    p= 'passwords: 123'

</template>

<style lang='stylus' src='../assets/login.stylus'></style>

<script>
  import { mapGetters } from 'vuex';

  export default {
    
    layout: 'auth',

    data() {
      return {
        login:          'admin@example.com',
        password:       '123',
        incorrectLogin: false,
      }
    },

    computed: {
      ...mapGetters({
        users:  'users/getUsers',
        data:   'session/hasData',
        errors: 'errors/getErrors',
      })
    },

    methods: {
      onSubmit () {

        // Check user in users.js
        const userData = this.users.find( user => ( user.login === this.login )&&( user.password === this.password ));
        
        // If user has been defined, login and set user data
        if ( !!userData ) {
          this.$store.dispatch( 'session/loadUserData', userData );
          this.$store.dispatch( 'session/login' );
          this.$router.push('/');
        }
        else {
          this.incorrectLogin = true;
          setTimeout( () => this.incorrectLogin = false, 5000 );
        }

      },
    },

  }
</script>