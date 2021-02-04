<template>
    <div id="main">
        <router-view/>
    </div>
</template>

<script>
import Landing from './Landing'

export default {
    name: 'Main',
    components: {
        Landing
    }
}
</script>

<style>
    #main{
        width: 100%;
    }
</style>