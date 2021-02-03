<template>
    <div class="register">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <div v-if="error" class="alert alert-danger">{{error}}</div>
                <form @submit.prevent="handleSubmit">
                    <h6 class="card-title mb-2">Name</h6>
                    <input type="text" id="name" name="name" class="form-control mb-2" v-model="name" required>
                    <h6 class="card-title mb-2">Address</h6>
                    <input type="text" id="address" name="Address" class="form-control mb-2" v-model="address" required>
                    <h6 class="card-title mb-2">Email</h6>
                    <input type="email" id="email" name="email" class="form-control mb-2" v-model="email" required>
                    <h6 class="card-title mb-2">Password</h6>
                    <input type="password" id="password" name="password" class="form-control mb-2" v-model="password" required>
                    <h6 class="card-title mb-2">Confirm Password</h6>
                    <input type="password" name="password2" class="form-control mb-2" required>
                    <br>
                    <button type="submit" class="btn btn-vue">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import doRegister from '../composables/register'

export default {
    setup(props, context) {
        const { error, register } = doRegister()

        // refs
        const name = ref('')
        const address = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await register(email.value, password.value)
            if (!error.value) {
                context.emit('register')
            }
        }

        return { name, address, email, password, handleSubmit, error }
    }
};
</script>

<style>

</style>