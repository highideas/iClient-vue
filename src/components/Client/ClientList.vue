<template>
<section class="">
  <div class="container hello">
    <div class="level header">
        <div class="level-left">
            <h2 class="title is-2">{{ msg }}</h2>
        </div>
        <div class="level-right">
            <router-link :to="{ path: '/client/create/'}"  class="button is-info is-medium" exac>
                <span class="icon">
                    <i class="fa fa-plus"></i>
                </span>
                <span>New Client</span>
            </router-link>
        </div>
    </div>
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
.level.header {
    padding-top: 20px;
}
.header h2 {
    color: #FFFFFF;
}
</style>
