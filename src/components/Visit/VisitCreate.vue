<template>
<section class="hero is-fullheight is-primary">

    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <h3 class="title has-text-centered is-3">VISIT CREATE</h3>
                    <label class="label">Data</label>
                    <p class="control">
                        <input class="input" type="date">
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-half">
                    <client-table v-on:clickClient="addClient($event)" >
                    </client-table>
                </div>

                <div class="column is-half">
                    <table class="table">
                        <thead>
                            <tr @click="">
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="client in clientsSelected">
                                <td>{{ client.name }}</td>
                                <td>{{ client.address }}</td>
                                <td>{{ client.city }}</td>
                                <td class="is-icon">
                                    <a href="#">
                                        <i class="fa fa-minus"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>

import { HOST } from '../../config.js'
import ClientTable from '../Client/ClientTable'

export default {
  components : {
    ClientTable
  },
  data () {
    return {
        clients: {},
    clientsSelected: [],
    }
  },
  created() {

  },
  methods: {
    addClient(client) {
      this.clientsSelected.push(client);
      let index = this.$children[0].clients.indexOf(client);
      this.$children[0].clients.splice(index,1);
    }
  }
}
</script>
