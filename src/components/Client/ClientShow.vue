<template>
<section class="">
    <div class="container profile column is-12">
        <div class="column is-12">
            <div class="section profile-heading">
                <div class="columns">
                    <div class="column is-4">
                        <div class="image is-2by1 avatar">
                            <img src="https://placehold.it/256x256" alt="Map" title="Map">
                        </div>
                    </div>
                    <div class="column is-4 name">
                        <h3 class="title is-3">
                            <span class="title is-bold">{{ client.name }}</span>
                        </h3>
                        <p class="tagline"> <strong>Address: </strong> {{ client.address + ' - ' + client.city }}</p>
                        <p class="tagline"> <strong>Area: </strong> {{ client.area._id }}</p>
                    </div>
                    <div class="column is-2 followers has-text-centered">
                        <p class="stat-val">{{ client.frequency }}</p>
                        <p class="stat-key">Frequency</p>
                    </div>
                    <div class="column is-2 likes has-text-centered">
                        <p class="stat-val">{{ client.ability }}</p>
                        <p class="stat-key">Ability</p>
                    </div>
                </div>
            </div>
            <nav class="nav buttons">
                <div class="nav-center nav-menu is-active">
                    <span class="nav-item">
                    <router-link :to="{ path: '/visit/create/' + client._id, params: { id: client._id }}"  class="button is-primary is-outlined" exac>
                        <span class="icon">
                            <i class="fa fa-check"></i>
                        </span>
                        <span>Visited</span>
                    </router-link>
                      <a class="button is-primary is-outlined" href="#">
                        <span class="icon">
                          <i class="fa fa-pencil"></i>
                        </span>
                        <span>Update</span>
                      </a>
                    </span>
                    <span class="nav-item">
                      <a class="button is-primary is-outlined" >
                        <span class="icon">
                          <i class="fa fa-calendar"></i>
                        </span>
                        <span>Schedule</span>
                      </a>
                      <a class="button is-danger" href="#">
                        <span class="icon">
                          <i class="fa fa-close"></i>
                        </span>
                        <span>Delete</span>
                      </a>
                    </span>
                  </div>
            </nav>
        </div>
    </div>

  </section>
</template>

<script>

import { HOST } from '../../config.js'

export default {
    data () {
        return {
            client: {}
        }
    },
    created() {
        var url = `${HOST}/api/v1/client/` + this.$route.params.id
        this.$http.get(url, {
            headers: {
                Authorization : localStorage.token
            }
        }).then(function (res) {
            this.client = res.data.client[0];
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
.profile-options {
  background-color: #f1f1f1;
  margin:-20px 0 20px 0;
}
.profile-options .link a {
  padding:18px;
  font-size: 18px;
}
.profile-options .link .icon {
  font-size: 16px;
  padding-top:2px;
}
.profile-options .columns {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

nav.buttons {
    border-top: 1px solid #f1f1f1;
}
nav.buttons span.nav-item {
    width: 100%;
}
nav.buttons .nav-menu.is-active {
    width: 50%;
}

@media screen and (max-width: 768px) {
    nav.buttons .nav-menu.is-active {
        width: 100%!important;
    }
    nav.buttons {
        border-top: none;
    }
}

</style>
