<template>
<section class="hero is-fullheight is-primary">

    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <h3 class="title has-text-centered is-3">VISIT CREATE</h3>
                </div>
            </div>
            <center>
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <p class="is-5">Name: {{ client.name }}</p>
                            <p class="is-6">Address: {{ client.address }}</p>
                            <p class="is-6">City: {{ client.city }}</p>
                            <hr>
                            <label class="label">Value Received</label>
                            <p class="control">
                                <input class="input" type="text" placeholder="" v-model="value" required>
                            </p>
                            <label class="label">Quantity</label>
                            <p class="control">
                                <input class="input" type="text" placeholder="" v-model="quantity" required>
                            </p>
                            <button class="button is-primary" @click="createVisit()">Cadastrar</button>
                        </div>
                    </div>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="http://placehold.it/300x225" alt="">
                        </figure>
                    </div>
                </div>
            </center>
        </div>
    </div>
</section>
</template>

<script>

import { HOST } from '../../config.js'

export default {
  components : {
  },
  data () {
    return {
    client: {},
    value: 0,
    quantity: 0,
    }
  },
  created() {
    var url = `${HOST}/api/v1/client/` + this.$route.params.id
    this.$http.get(url, {
        headers: {
            Authorization : localStorage.token
        }
    }).then(function (res) {
        this.client = res.data.client[0];
        console.log(this.client);
    }, function (err) {
        console.log(err);
    });
  },
  methods: {
    createVisit() {
        let data = {
            client: this.client,
            visit_date: new Date(),
            sales_quantity: this.quantity,
            value_received: this.value
        };
        console.log(data);
    }
  }
}
</script>
