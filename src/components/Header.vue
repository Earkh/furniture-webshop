<template>
    <header id="nav" class="d-flex justify-content-around align-items-center">
        <router-link to="/"><h2 id="text-home" class="mb-0">Vue Furniture Store</h2></router-link>
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
        top: 0;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2);
        position: sticky;
        background: #fff;
        z-index: 3;
    }
    #text-home{
        color:#42b983;
        font-size: 100%;
    }
    #text-home:hover{
        color:#2c3e50;
        text-decoration: underline;
        text-decoration-color: #42b983;
        text-decoration-thickness: 1px;
    }
    a:hover {
        text-decoration: none;
    }
    
    
</style>