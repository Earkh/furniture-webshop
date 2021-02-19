<template>
    <div id="main" class="d-flex justify-content-center
    align-items-center">
        <Landing></Landing>
    </div>
    <footer class="col d-flex justify-content-around align-items-center">
        <p><router-link to="/about">About Us</router-link></p>
        <span>© 2021 <router-link to="/">vuefurniture</router-link>.com</span>
        <p><router-link to="/contact">Contact Us</router-link></p>
    </footer>
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
    footer{
        width:100%;
        height: 8vh;
        top: 0;
        box-shadow: 5px 2px 2px 2px rgba(0,0,0,0.2);
        position: sticky;
        background: #fff;
        z-index: 3;
    }
</style>
