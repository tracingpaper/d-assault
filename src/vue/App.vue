<template>
    <div id="main" class="uk-container">
        <app-navbar></app-navbar>
        <div class="uk-grid-large uk-flex-middle" data-uk-grid uk-height-viewport="offset-top: true; offset-bottom: true">
            <div class="uk-width-1-1 uk-width-1-2@m">
                <app-form></app-form>
            </div>
            <div class="uk-width-1-1 uk-width-1-2@m uk-flex-first@m">
                <app-content></app-content>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import AppNavbar from './partials/Navbar.vue'
    import AppContent from './partials/Content.vue'
    import AppForm from './partials/Form.vue'
    import AppFooter from './partials/Footer.vue'

    export default Vue.extend({
        name: 'my-app',
        data() {
            return {
                title: 'Vue Starter'
            }
        },
        components: {
            AppNavbar,
            AppContent,
            AppForm,
            AppFooter
        }
    })
</script>

