<template>
    <div id="main" class="d-flex justify-content-center
    align-items-center">
        <Landing></Landing>
    </div>
</template>

<script>
import Landing from '../components/Landing'

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
        height: 92vh;
    }
</style>
