<template>
<section class="hero is-fullheight is-primary client">

  <div>
    <h1 class="title is-1">{{ msg }}</h1>
  </div>
  <div class="hero is-fullheight is-primary">
    <client-table v-on:clickClient="openClient($event)" />
  </div>

<div v-bind:class="[{ 'is-active': modalActive }, 'modal']">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{ clientSelected.name }}</p>
      <button class="delete" @click="toogleModal"></button>
    </header>
    <section class="modal-card-body">
	<div class="content">
	    <p> Address: {{ clientSelected.address }} </p>
	    <p> City: {{ clientSelected.city }} </p>
	</div>
    </section>
    <footer class="modal-card-foot">
      <a class="button is-info">Update</a>
      <a class="button is-danger">Delete</a>
    </footer>
  </div>
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
      clientSelected: {},
      modalActive: false
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
      	});
    },
    methods: {
	openClient(client) {
	 this.clientSelected = client;
	 this.toogleModal();
	 console.log(this.clientSelected);
	},
	toogleModal() {
	    this.modalActive = !this.modalActive;
	}
    }
}
</script>
