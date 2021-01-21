<template>
    <header class="d-flex justify-content-around align-items-center">
        <div class="d-flex align-content-center"><h2 class="mb-0">Vue Furniture Store</h2></div>
        <Nav></Nav>
    </header>
</template>

<script>
import Nav from './Nav'

export default {
    name: 'Header',
    components: {
        Nav
    },
}
</script>

<style>
    header{
        width:100%;
        height: 8vh;
        color: #6ba292;
        top: 0;
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.25);
    }
</style>