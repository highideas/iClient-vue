<template>
<section class="hero is-fullheight is-primary">

  <div class="container hello">
    <div class="area" v-for="area in areas">
        <h3 class="title is-3">{{area._id}}</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Visit</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="areaVisit in area.visits">
                    <td>{{ areaVisit.visit.client.name }}</td>
                    <td>{{ getDate(areaVisit.visit.visit_date) }}</td>
                    <td class="is-icon">
                        <router-link :to="{ path: '/visit/' + areaVisit.visit._id, params: { id: areaVisit.visit._id }}" exac>
                            <i class="fa fa-info-circle"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>    

    </div>


  </div>
  </section>
</template>

<script>

import { HOST } from '../../config.js'
import ViewHelper from '../../helpers/ViewHelper'

export default {
  data () {
    return {
        areas: []
    }
  },
    created: function (){
            this.$http.get(`${HOST}/api/v1/visit/group/area`, {
                 headers: {
                    Authorization : localStorage.token
                }
            }).then(function (res) {
                this.areas = res.data.visits;
            }, function (err) {
                console.log(err);
            });
    },
    methods: {
        getDate(date) {
            let dateObj = new Date(date);
            return dateObj.toLocaleDateString()
        }
    }
}
</script>
