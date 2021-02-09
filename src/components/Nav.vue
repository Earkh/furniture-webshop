<template>
    <nav class="d-flex justify-content-end align-items-center">
        <!-- <div class="navButtonsContainer d-flex justify-content-around align-content-center align-items"> | -->
        <div v-if="user">
            <img src="@/assets/user.png" alt="User" style="height: 3.5vh;" class="dropdown-toggle dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#" @click.prevent="handleClick">Logout</a>
            </div>
        </div>
        <div v-else>
            <router-link to="/signup"><img src="@/assets/user.png" alt="User" style="height: 3.5vh;"></router-link>
        </div>
        <img src="@/assets/cart.png" alt="Cart" style="height: 3vh; cursor: pointer" class="ml-2 dropdown-toggle dropdown" id="dropdownCartButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="badge badge-pill badge-danger" style="margin-left: -12px; margin-top: -20px; z-index: 4" v-if="Object.keys(items).length > 0">{{Object.keys(items).length}}</span>
        <div class="dropdown-menu" aria-labelledby="dropdownCartButton">
            <CartDropdown></CartDropdown>
        </div>
    </nav>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import doLogout from '../composables/logout'
import CartDropdown from './CartDropdown'

export default {
    setup() {
        const { logout, error } = doLogout()
        const { user } = getUser()
        const store = useStore()
        
        const router = useRouter()
        const items = computed(() => store.state.cart)

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                console.log('Logout')   
                router.push({ name: 'Home' })
            }
        }
        
        return { handleClick, user, CartDropdown, items }
    }
}
</script>

<style>
    .dropdown-menu{
        min-width: 15rem;
    }
    .navButtonsContainer{
        height: 3vh;
        width: 20%;
        display: inline-block;
    }
    .dropdown-item:hover{
        background: rgba(66, 185, 131, 0.5);
    }
</style>