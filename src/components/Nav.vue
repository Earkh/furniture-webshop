<template>
    <nav class="d-flex justify-content-end align-items-center">
        <!-- <div class="navButtonsContainer d-flex justify-content-around align-content-center align-items"> --> |
            <router-link to="/about">About</router-link>
            <router-link to="/login"><img src="@/assets/user.png" alt="User" style="height: 3vh;"></router-link>
        <!-- </div> -->
    </nav>
</template>

<style>
    .navButtonsContainer{
        height: 3vh;
        width: 20%;
        display: inline-block;
    }
</style>