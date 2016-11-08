<template>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in clients" @click="clickClient(client)" class="rowClient">
                <td>{{ client.name }}</td>
                <td>{{ client.address }}</td>
                <td>{{ client.city }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import { HOST } from '../../config.js'

export default {
  data () {
    return {
    clients: {}
    }
  },
  created: function (){
    this.$http.get(`${HOST}/api/v1/client`, {
      headers: {
        Authorization : localStorage.token
      }
    }).then(
    function (res) {
            this.clients = res.data.clients;
        },
    function (err) {
          console.log(err);
        }
    );
  },
  methods: {
    clickClient(client) {
    this.$emit('clickClient', client);
    },
  },
}
</script>

<style>
.rowClient {
 cursor: pointer;
}
</style>
