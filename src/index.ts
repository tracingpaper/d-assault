import Vue from 'vue'

// import store
import store from './vue/store'

// Import style
import './scss/app.scss'

// Import App
import MyApp from './vue/App.vue'
/*
 |----------------------------------------------------------
 | App Created Here
 |----------------------------------------------------------
*/

const app = new Vue({
    store,
    components: {
        MyApp
    }
}).$mount('#app')