<template>
    <nav class="d-flex justify-content-end align-items-center">
        <div class="dropdown">
            <img src="@/assets/user.png" alt="User" style="height: 3.5vh; cursor: pointer;" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton">
                <div v-if="user">
                    <router-link to="/profile"><a class="dropdown-item">Profile</a></router-link>
                    <router-link to="/orders"><a class="dropdown-item">My Orders</a></router-link>
                    <a class="dropdown-item" href="#" @click.prevent="handleClick">Logout</a>
                </div>
                <div v-else>
                    <router-link to="/signup">Sign In</router-link>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <img src="@/assets/cart.png" alt="Cart" style="height: 3vh; cursor: pointer" class="ml-2 dropdown-toggle" id="dropdownCartButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <CartDropdown></CartDropdown>
            </div>
        </div>
        <span class="badge badge-pill badge-danger" style="margin-left: -12px; margin-top: -20px; z-index: 4" v-if="Object.keys(items).length > 0">{{Object.keys(items).length}}</span>
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