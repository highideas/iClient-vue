<template>
<section class="">
  <div class="container hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <client-table v-on:clickClient="openClient($event)" />
  </div>
</section>
</template>

<script>

import { HOST } from '../../config.js'
import ClientTable from './ClientTable'

export default {
  components: {
    ClientTable
  },
  data () {
    return {
      msg: 'Clients',
      clients: {},
    }
  },
  props: ['client'],
    created: function (){
        this.$http.get(`${HOST}/api/v1/client`, {
            headers: {
                Authorization : localStorage.token
            }
        }).then(function (res) {
            this.clients = res.data.clients;
            }, function (err) {
                console.log(err);
            }
        );
    },
    methods: {
        openClient(client) {
            let to = 'client/' + client._id;
            this.$router.push(to);
        },
    }
}
</script>

<style>
</style>
