<template lang="pug">

  //- .popup(v-if="popup.display")
  //-   button( @click.prevent="closePopup" )= "Close"
  //-   .edit-product( v-if="popup.value == 'editProductData'" )
  //-   form
  //-     input( type="text" placeholder="Enter new name..." v-model="name" )
  //-     input( type="number" min="0" step="any" placeholder="Enter new price..." v-model="price" )
  //-     button( @click.prevent="editProduct(name, price)" )= "Edit"

  .popup(v-if='popup.display')
    button(@click.prevent='closePopup') Close
    .edit-product(v-if="popup.value == 'editProductData'")
      form
        input(type='text' placeholder='Enter new name...' v-model='name')
        input(type='number' min='0' step='any' placeholder='Enter new price...' v-model='price')
        p {{updater}}
        button(@click.prevent='editProduct(name, price)') Edit

</template>

<script>
  import { mapGetters } from "vuex"

  export default {

    data() {
      return {
        name: '',
        price: 0,
      }
    },

    computed: {

      ...mapGetters({
        popup: "popup/getPopup",
      }),

      updater () {
        this.name = this.popup.temp.name
        this.price = this.popup.temp.price
      }

    },

    methods: {

      updateProps () {
        this.name = this.popup.temp.name
        this.price = this.popup.temp.price
      },

      editProduct (name, price) {
        this.$store.dispatch("products/loadEditionProduct", {name, price, id: this.popup.temp.id})
      },

      closePopup () {
        this.$store.dispatch("popup/closePopup")
      },

    },

  }
</script>