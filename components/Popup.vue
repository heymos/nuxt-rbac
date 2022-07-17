<template lang='pug'>

.popup( v-if='popup.display' )
  .wrap
    button.close( @click.prevent='closePopup' )= 'X'
    .edit-product( v-if="popup.value == 'editProductData'" )
      form
        template {{ updater }}
        input( type='text' placeholder='Enter new name...' v-model='name' )
        input( type='number' min='0' step='any' placeholder='Enter new price...' v-model='price' )
        button( @click.prevent='editProduct( name, price )' )= 'Edit'

</template>

<style lang='stylus' src='../assets/popup.stylus'></style>

<script>
  import { mapGetters } from 'vuex'

  export default {

    data() {
      return {
        name: '',
        price: 0,
      }
    },

    computed: {

      ...mapGetters({
        popup: 'popup/getPopup',
      }),

      updater () {
        this.name = this.popup.temp.name;
        this.price = this.popup.temp.price;
      },

    },

    methods: {

      editProduct (name, price) {
        this.$store.dispatch( 'products/loadEditionProduct', {name, price, id: this.popup.temp.id} );
      },

      closePopup () {
        this.$store.dispatch( 'popup/closePopup' );
      },

    },

  }
</script>