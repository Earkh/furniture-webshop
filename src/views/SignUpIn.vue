<template>
    <div v-if="showLogin" class=" col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <LoginForm @login="redirectDashboard"></LoginForm>
        <div class="card-footer text-muted">
            Don't have an account? <span @click="showLogin = false">Register here</span>
        </div>
    </div>
    <div v-else  class=" col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <RegisterForm  @register="redirectDashboard"></RegisterForm>
        <div class="card-footer text-muted">
            Already have an account? <span @click="showLogin = true">Login here</span>
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { ref }  from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { RegisterForm, LoginForm },
    setup() {
        const showLogin = ref(true)
        const router = useRouter()
        const redirectDashboard = () => {
            router.push({ name: 'Dashboard' })
        }
        return { showLogin, redirectDashboard }
    }
}
</script>

<style>

</style>