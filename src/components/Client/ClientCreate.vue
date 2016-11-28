<template>
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
                <h1 class="title">
                    Register a Client
                </h1>
                <div class="box">
                    <label class="label">Name</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="John Smith" v-model="form.name">
                    </p>
                    <label class="label">Phone</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="21 99999-00000" v-model="form.phone">
                    </p>
                    <label class="label">Address</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Street 32 - Nª 23" v-model="form.address">
                    </p>
                    <label class="label">City</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="London" v-model="form.city">
                    </p>
                    <label class="label">Area</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="Center" v-model="form.area">
                    </p>
                    <label class="label">Frequency</label>
                    <p class="control">
                        <input class="input" type="number" placeholder="10" v-model="form.frequency">
                    </p>
                    <label class="label">Ability</label>
                    <p class="control">
                        <input class="input" type="number" placeholder="200" v-model="form.ability">
                    </p>
                    <hr>
                    <p class="control">
                        <button class="button is-primary" @click="createClient()">Register</button>
                        <button class="button is-default">Cancel</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    methods: {
        createClient() {
            console.log(this.form);
        }
    }
}
</script>
<style>
h1.title {
    text-align: center;
    color: #FFFFFF;
}
</style>
