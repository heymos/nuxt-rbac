<template>
  <div class="popup" v-if="popup.display">
    <button @click.prevent="closePopup">Close</button>
    <div class="edit-product" v-if="popup.value == 'editProductData'">
      <p>Edit {{popup.temp.id}}</p>
      <form>
        <input type="text" placeholder="Enter new name..." v-model="name">
        <input type="number" min="0" step="any" placeholder="Enter new price..." v-model="price">
        <p>{{updater}}</p>
        <button @click.prevent="editProduct(name, price)">Edit</button>
      </form>
    </div>
  </div>
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
        this.updateProps()
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