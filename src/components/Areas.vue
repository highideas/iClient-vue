<template>
<section class="hero is-fullheight is-primary">

  <div class="container hello">
    <div class="area" v-for="area in areas">
        <h3 class="title is-3">{{ area.name }}</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Visit</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in area.clients">
                    <td>{{ client.name }}</td>
                    <td>{{ client.visita }}</td>
                    <td class="is-icon">
                        <a href="#">
                            <i class="fa fa-calendar"></i>
                        </a>
                    </td>
                    <td class="is-icon">
                        <a href="#">
                            <i class="fa fa-search"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>    

    </div>


  </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Clients',
    clients: {},
        areas : [
            { 
                name: "Area 1",
                clients: [
                    {name: "Client 1", visita: "10/09/2006"},
                    {name: "Client 2", visita: "11/09/2006"},
                    {name: "Client 3", visita: "10/09/2006"}
                ]
            },
            { 
                name: "Area 2",
                clients: [
                    {name: "Client 1", visita: "11/09/2006"},
                    {name: "Client 2", visita: "10/09/2006"},
                ]
            }
        ]
    }
  },
    created: function (){
        console.log(localStorage.getItem('jwt-token'));
            this.$http.get('http://localhost:3000/api/v1/client', {
                 headers: {
                    Authorization : localStorage.token
                }
            }).then(function (res) {
                console.log(res);
                this.clients = res.data.clients;
            }, function (err) {
                console.log(err);
            });
    },
    methods: {
    }
}
</script>
