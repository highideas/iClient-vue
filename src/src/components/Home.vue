<template>
<section class="hero is-fullheight is-primary">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title has-text-centered">
              IClient
            </h1>
            <div class="box">
              <label class="label">Email</label>
              <p class="control">
                <input class="input" type="text" placeholder="jsmith@example.org" v-model="form.username">
              </p>{{ form.username }}
              <label class="label">Password</label>
              <p class="control">
                <input class="input" type="password" placeholder="●●●●●●●" v-model="form.password">
              </p>
              <hr>
              <p class="control">
                <button class="button is-primary" v-on:click="login">Login</button>
                <button class="button is-default">Cancel</button>
              </p>
                <p class="has-text-centered">
                    <a href="register.html">Register an Account</a>
                    | 
                    <a href="#">Forgot password</a>
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
      msg: 'Clients',
        form: {}
    }
  },
    methods: {
        login() {
            this.$http.post('http://localhost:3000/authenticate', this.form).then(function(res){
                if (res.status == 200) {
                    localStorage.token = res.data.token;
                    window.location.href = "/#/client";
                }
            }, function(err){
                console.log(err);
            });
        }
    }
}
</script>
