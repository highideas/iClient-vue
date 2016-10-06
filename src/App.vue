<template>  
    <div>
        <navigator></navigator>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigator from './components/Navigator.vue'

export default {
    components: {
        Navigator
    }
}
</script>
