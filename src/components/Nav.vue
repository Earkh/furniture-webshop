<template>
    <nav class="d-flex justify-content-end align-items-center">
        <!-- <div class="navButtonsContainer d-flex justify-content-around align-content-center align-items"> | -->
            <!-- <router-link to="/about">About</router-link> -->
            <router-link to="/signup"><img src="@/assets/user.png" alt="User" style="height: 3vh;"></router-link>
            <button class="btn btn-danger" @click="handleClick" v-if="user">Logout</button>
        <!-- </div> -->
    </nav>
</template>
<script>
import doLogout from '../composables/logout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { logout, error } = doLogout()
        const { user } = getUser()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                console.log('Logout')   
                router.push({ name: 'Home' })
            }
        }
        
        return { handleClick, user }
    }
}
</script>
<style>
    .navButtonsContainer{
        height: 3vh;
        width: 20%;
        display: inline-block;
    }
</style>