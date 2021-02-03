<template>
    <nav class="d-flex justify-content-end align-items-center">
        <!-- <div class="navButtonsContainer d-flex justify-content-around align-content-center align-items"> | -->
        <div v-if="user">
            <img src="@/assets/user.png" alt="User" style="height: 3vh;" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#" @click.prevent="handleClick">Logout</a>
            </div>
        </div>
        <div v-else>
            <router-link to="/signup"><img src="@/assets/user.png" alt="User" style="height: 3vh;"></router-link>
        </div>
        <!-- <a class="dropdown-item" href="#" @click.prevent="handleClick">Logout</a> -->
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
    .dropdown-item:hover{
        background: rgba(66, 185, 131, 0.5);
    }
</style>