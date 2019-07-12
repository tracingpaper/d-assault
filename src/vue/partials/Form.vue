<template>
    <div id="form" class="uk-text-center">
        <h2 class="form-title">Authenticate Product</h2>

        <p class="form-lead">You can verify your product using the scratch code which can be seen on the product</p>

        <form class="authenticate-form uk-margin-medium-top" @submit.prevent="">

            <input type="text" class="uk-input" placeholder="Enter scratch code here . .">

            <button class="uk-button uk-button-primary uk-margin-top">
                Check
            </button>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>

</style>