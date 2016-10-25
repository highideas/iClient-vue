<template>
<section class="hero is-fullheight is-primary">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title has-text-centered is-1">
              IClient
            </h1>
            <div class="box">
                <div class="notification is-danger" v-if="error">
                    <button class="delete" @click="cleanError"></button>
                    {{ this.error }}
                </div>

              <label class="label">Username</label>
              <p class="control">
                <input class="input usermane" type="text" placeholder="JS Smith" v-model="form.username" v-on:keyup.enter="login">
              </p>{{ form.username }}
              <label class="label">Password</label>
              <p class="control has-icon has-icon-right">
                <input class="input password" type="password" placeholder="●●●●●●●" v-model="form.password" v-on:keyup.enter="login">
              </p>
              <hr>
              <p class="control">
                <button class="button is-primary" v-on:click="login">Login</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      error: false,
    }
  },
    methods: {
        login() {
            this.$http.post('http://localhost:3000/authenticate', this.form).then(function(res){
                if (res.status == 200 && res.data.success == 200) {
                    localStorage.token = res.data.token;
                    this.$router.push('/');
                }
                this.error = res.data.message;
            }, function(err){
                console.log(err);
            });
        },

        cleanError() {
            this.error = false;
        }
    },
}
</script>
