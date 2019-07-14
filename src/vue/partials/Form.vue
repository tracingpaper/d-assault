<template>
    <div id="form" class="uk-text-center">
        <h2 class="form-title">Authenticate Product</h2>

        <p class="form-lead">You can verify your product using the scratch code which can be seen on the product</p>

        <form class="authenticate-form uk-margin-medium-top" @submit.prevent="verify()">

            <input type="text" class="uk-input" placeholder="Enter scratch code here . ." v-model="code" required>

            <button type="submit" class="uk-button uk-button-primary uk-margin-top" :disabled="loading">
                <div v-if="loading" class="uk-margin-right" uk-spinner="ratio:0.3"></div>{{loading? 'Checking' : 'Check'}}
            </button>

            <div class="uk-margin-top" v-if="response">
                <span class="uk-text-success" v-if="response.verified">{{response.content}}</span>
                <span class="uk-text-danger" v-else>{{response.content}}</span>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import axios from 'axios'
    import UIkit from 'uikit'

    export default Vue.extend({
        data() {
            return {
                scratchCode: '',
                loading: false,
                api_url: 'https://us-central1-d-assault-d3fa8.cloudfunctions.net/codes/verify',
                response: null
            }
        },

        computed: {
            code: {
                get() {
                    return this.scratchCode
                },

                set(val: string) {
                    this.scratchCode = val.toUpperCase()
                }
            }
        },

        methods: {
            async verify() {

                try {

                    this.loading = true

                    const response = await axios.post(this.api_url, {
                        code: this.scratchCode
                    })

                    console.log(response)

                    if (response.status === 200) {

                        if (response.data.success) {
                            
                            if (response.data.verified) {
                                this.response = {
                                    verified: true,
                                    content: 'THIS IS A VALID PRODUCT'
                                }
                            }

                            else {
                                this.response = {
                                    verified: false,
                                    content: 'SORRY, THE PRODUCT IS NOT VALID'
                                }
                            }
                        }

                        else {
                            throw new Error(' An error occured')
                        }
                    }

                    else {
                        throw new Error('An error occured')
                    }
                }

                catch (err) {

                    UIkit.notification('An error occured', {
                        status: 'danger'
                    })
                }

                finally {
                    this.loading = false
                }
            }
        }
    })
</script>

<style scoped>

</style>