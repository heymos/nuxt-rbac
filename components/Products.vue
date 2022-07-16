<template lang='pug'>

main
  h2= 'Products:'

  ul
    li( v-for='product in products' :key='product.id' )
      img( src='../assets/default.svg' )
      .text
        h3= '{{ product.name }}'
        p.price= '{{ product.price }}$'
      
      .buttons
        template( v-if="( data.role == 'admin' ) || ( data.role == 'manager' )" )
          button( @click="showPopup( 'editProductData', product )" )= 'Edit'
          button( @click='deleteItem( product.id )' )= 'Delete'
        button= 'Buy'

</template>

<style lang='stylus' src='../assets/products.stylus'></style>

<script>
  import { mapGetters } from 'vuex';

  export default {

    computed: {
      ...mapGetters({
        data:     'session/userData',
        products: 'products/getProducts',
      })
    },

    methods: {

      showPopup ( newPopupValue, productData ) {
        this.$store.dispatch( 'popup/loadNewPopupValue', {newPopupValue, productData} );
      },

      deleteItem ( productId ) {
        this.$store.dispatch( 'products/removeProduct', productId );
      },

    },

  }
</script>
