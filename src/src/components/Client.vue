<template>
  <div class="container hello">
    <h1>{{ msg }}</h1>

    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in clients">
                <td>{{ client.name }}</td>
                <td>{{ client.address }}</td>
                <td>{{ client.city }}</td>
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
</template>

<script>
export default {
  data () {
    return {
      msg: 'Clients',
    clients: {}
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
