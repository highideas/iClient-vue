<template>
<nav class="nav has-shadow" id="top" v-if="isLogged">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item" href="../index.html">
            IClient
        </a>
      </div>
      <span class="nav-toggle" @click="handleToogle" v-bind:class="{ 'is-active': toogle }">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu" v-bind:class="{ 'is-active': toogle }">
        <router-link to="/" class="nav-item is-tab" exact>Home</router-link>
        <router-link to="/client" class="nav-item is-tab" exact>Client</router-link>
        <router-link to="/area" class="nav-item is-tab" exact>Area</router-link>
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
import auth from '../../auth.js'

export default {
    data() {
        return {
            isLogged: auth.loggedIn(),
            toogle: false
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
        },
        handleToogle() {
            this.toogle = !this.toogle;
        },
	disableToogle() {
	    this.toogle = false;
	}
    },
    watch: {
        '$route': ['verifyLogin', 'disableToogle']
    }
}
</script>
