<template>  
    <div >
        <navigator></navigator>
        <div class="body-primary">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navigator from './components/Navigator/Navigator.vue'

export default {
    components: {
        Navigator
    }
}
</script>

<style>
.body-primary {
    min-height: 100vh;
    background-color: #00d1b2;
    color: #333333;
}
</style>
