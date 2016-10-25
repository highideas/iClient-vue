<template>
<section class="hero is-fullheight is-primary">

    <div class="hero-body">
      <div class="container">
        <div class="is-half is-offset-one-quarter">
            <h1 class="title has-text-centered is-1">VISIT</h1>
            <router-view></router-view>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
        data: console.log(this)
    }
  },
}
</script>
