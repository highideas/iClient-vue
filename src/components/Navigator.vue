<template>
<nav class="nav has-shadow" id="top" v-if="isLogged">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item" href="../index.html">
            IClient
        </a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <router-link to="/" class="nav-item is-tab is-active">Home</router-link>
        <router-link to="/client" class="nav-item is-tab">Client</router-link>
        <router-link to="/area" class="nav-item is-tab">Area</router-link>
        <span class="nav-item">
          <a class="button" @click="logout">
            Logout
          </a>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import auth from '../auth.js'

export default {
    data() {
        return {
            isLogged: auth.loggedIn(),
        }
    },
    methods : {
        logout() {
            delete localStorage.token;
            this.isLogged = false
            this.$router.push('/login');
        },
        verifyLogin() {
            this.isLogged = auth.loggedIn();
        }
    },
    watch: {
        '$route': 'verifyLogin'
    }
}
</script>
