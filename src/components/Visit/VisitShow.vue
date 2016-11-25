<template>
<section class="hero is-fullheight is-primary">
    <div class="container profile column is-12">
    <div class="section profile-heading" style="color: #333333">
      <div class="columns">
        <div class="column is-4">
          <div class="image is-2by1 avatar">
            <img src="https://placehold.it/256x256">
          </div>
        </div>
        <div class="column is-4 name">
          <h3 class="title is-3">
            <span class="title is-bold" style="color: #333333">{{ visit.client.name }}</span>
          </h3>
          <p class="tagline"> <strong>Visit Date: </strong> {{ visit.visit_date }}</p>
          <p class="tagline"> <strong>Address: </strong> {{ visit.client.address }}</p>
          <p class="tagline"> <strong>Area: </strong> {{ visit.client.area._id }}</p>
        </div>
        <div class="column is-2 followers has-text-centered">
          <p class="stat-val">R$ {{ visit.value_received }}</p>
          <p class="stat-key">Value Received</p>
        </div>
        <div class="column is-2 likes has-text-centered">
          <p class="stat-val">{{ visit.sales_quantity}}</p>
          <p class="stat-key">Sales Quantity</p>
        </div>
      </div>
    </div>
    </div>

  </section>
</template>

<script>

import { HOST } from '../../config.js'

export default {
    data () {
        return {
            visit: {}
        }
    },
    created() {
        var url = `${HOST}/api/v1/visit/` + this.$route.params.id
        this.$http.get(url, {
            headers: {
                Authorization : localStorage.token
            }
        }).then(function (res) {
            this.visit = res.data.visit[0];
        }, function (err) {
        });
    }
}
</script>
<style>

.profile-heading .stat-val {
    font-size: 35px;
    font-weight: bold;
}
.profile-heading .followers, .profile-heading .following {
    border-right: 1px solid #f1f1f1;
    margin: -30px 0;
    padding: 70px 30px;
}
.profile-heading .likes {
    margin: -30px 0;
    padding: 70px 30px;
}
.profile-heading .name {
    border-right: 1px solid #f1f1f1;
    margin: -30px 0;
    padding: 40px 30px 0 30px;
}
.tagline {
    padding: 20px 0;
    line-height: 0.1;
}

</style>
