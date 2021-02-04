<template>
    <div class="h-100 d-flex justify-content-center align-items-center">
        <div v-if="showLogin" class="col-sm-9 col-md-6 col-lg-3">
            <LoginForm @login="redirectDashboard"></LoginForm>
            <div class="card-footer text-muted">
                Don't have an account? <span @click="showLogin = false" style="cursor: pointer; font-weight: bold">Register here</span>
            </div>
        </div>
        <div v-else  class="col-sm-9 col-md-6 col-lg-3">
            <RegisterForm  @register="redirectDashboard"></RegisterForm>
            <div class="card-footer text-muted">
                Already have an account? <span @click="showLogin = true" style="cursor: pointer; font-weight: bold">Login here</span>
            </div>
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