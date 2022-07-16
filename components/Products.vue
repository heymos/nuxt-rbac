<template>
  <main>
    
    <h2>Products</h2>

    <ul>
      <li v-for="product in products" :key="product.id">

        <p>{{product.name}}</p>

        <p>{{product.price}}</p>

        <div class="buttons">
          <template v-if="(data.role == 'admin') || (data.role == 'manager')">
            <button @click="showPopup('editProductData', product)">Edit</button>
            <button @click="deleteItem(product.id)">Delete</button>
          </template>

          <button>Buy</button>
        </div>

      </li>
    </ul>

  </main>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {

    computed: {
      ...mapGetters({
        data:        "session/userData",
        products:    "products/getProducts"
      })
    },

    methods: {

      showPopup (newPopupValue, productData) {
        this.$store.dispatch("popup/loadNewPopupValue", {newPopupValue, productData})
      },

      deleteItem (productId) {
        this.$store.dispatch("products/removeProduct", productId)
      }

    }

  }
</script>
