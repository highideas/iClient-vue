<template>
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Area</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> <input type="text" v-model="filterName" /> </td>
                <td></td>
                <td></td>
            </tr>
            <tr v-for="client in filteredClients" @click="clickClient(client)" class="rowClient">
                <td>{{ client.name }}</td>
                <td>{{ client.area._id }}</td>
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
        clients: [],
        filterName: "",
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
  computed: {
    filteredClients() {
        let self = this;
        return this.clients.filter(function(client){
            return client.name.indexOf(self.filterName) > -1
        });
    }
  }
}
</script>

<style>
.rowClient {
 cursor: pointer;
}
</style>
