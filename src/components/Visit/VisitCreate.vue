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
  <div class="column is-half notification is-warning">
    First column
  </div>
  <div class="column is-half notification is-danger">
    Second column
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
        data: console.log(this)
    }
  },
}
</script>
