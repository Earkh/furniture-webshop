<template>
    <div class="login">
        <div class="card">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <div v-if="error" class="alert alert-danger">{{error}}</div>
                <form @submit.prevent="handleSubmit">
                    <h6 class="card-title mb-2">Email</h6>
                        <input type="text" name="email" class="form-control mb-2" v-model="email" required>
                    <h6 class="card-title mb-2">Password</h6>
                    <input type="password" name="password" class="form-control mb-2" v-model="password" required>
                    <br>
                    <button type="submit" class="btn btn-vue">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import doLogin from '../composables/login'

export default {
    setup(props, context) {
        const { error, login } = doLogin()
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                context.emit('login')
            }
        }

        return {email, password, handleSubmit, error }
    }
};
</script>

<style>

</style>