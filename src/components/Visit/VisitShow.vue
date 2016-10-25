<template>
<section class="hero is-fullheight is-primary">

      <div class="container">
        <div class="box">
        <div class="columns">
            <div class="column is-half">
                <h4 class="title is-4 strong" style="color: #333333">Client</h4>
            </div>
            <div class="column is-half">
                <h4 class="title is-4 strong" style="color: #333333">{{ visit.client.name }}</h4>
            </div>
        </div>
        <div class="columns">
            <div class="column is-half">
                <h4 class="title is-4 strong" style="color: #333333">Visit Date</h4>
            </div>
            <div class="column is-half">
                <h4 class="title is-4 strong" style="color: #333333">{{ visit.visit_date }}</h4>
            </div>
        </div>
      </div>
      </div>

  </section>
</template>

<script>
export default {
    data () {
        return {
            visit: {}
        }
    },
    created() {
        console.log(this.$route.params.id)
        var url = 'http://localhost:3000/api/v1/visit/' + this.$route.params.id
        this.$http.get(url, {
            headers: {
                Authorization : localStorage.token
            }
        }).then(function (res) {
            this.visit = res.data.visit[0];
            console.log(this.visit);
        }, function (err) {
            console.log(err);
        });
    }
}
</script>
