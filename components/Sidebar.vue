<template>
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
</template>

<script>
  import { mapGetters } from "vuex"

  export default {

    computed: {
      ...mapGetters({
        users:       "users/getUsers",
        data:        "session/userData",
      })
    },

    methods: {

      setRole(userId, newRole) {
        this.$store.dispatch("users/loadNewRole", {userId, newRole})
      },

    }

  }
</script>