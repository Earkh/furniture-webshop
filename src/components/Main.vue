<template>
    <div id="main" class="d-flex justify-content-center
    align-items-center">
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