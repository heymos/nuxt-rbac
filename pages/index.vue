<template>
  <div class="columns">
    
    <Popup></Popup>

    <aside>
      <div class="wrap" v-if="data.role !== 'user'">
        <h2>Users:</h2>
        <ul>
          <li v-for="user in users" :key="user.id">
            <p>{{user.id}}</p>
            <p>{{user.role}}</p>
          <div class="buttons" v-if="(data.role == 'admin')&&(user.role !== 'admin')">
              <button @click="setRole(user.id, 'manager')">Manager</button>
              <button @click="setRole(user.id, 'user')">User</button>
            </div>
          </li>
        </ul>
      </div>
    </aside>

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

  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {

    middleware: 'auth',

    computed: {
      ...mapGetters({
        users:       "users/getUsers",
        data:        "session/userData",
        products:    "products/getProducts"
      })
    },

    methods: {

      setRole(userId, newRole) {
        this.$store.dispatch("users/loadNewRole", {userId, newRole})
      },

      showPopup (newPopupValue, productData) {
        this.$store.dispatch("popup/loadNewPopupValue", {newPopupValue, productData})
      },

      deleteItem (productId) {
        this.$store.dispatch("products/removeProduct", productId)
      }

    }

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