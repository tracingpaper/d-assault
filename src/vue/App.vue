<template>
    <div>
        <div class="cover">
            <h1 class="title">{{title}}</h1>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'my-app',
        data() {
            return {
                title: 'Vue Starter'
            }
        }
    })
</script>

<style lang="scss" scoped>
    .cover {
        display: flex;
        height: 100vh;
        width: 100vw;

        h1.title {
            font-size: 5rem;
            font-weight: 300;
            margin: auto;
        }
    }
</style>
