<template>
    <div class="h-100 d-flex justify-content-center align-items-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Logged!
                </div>
                <div class="card-body">
                    {{ user.email }}
                </div>
                <router-link to="/"><button class="btn btn-vue mb-4">Return</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import getUser from '../composables/getUser'

export default {
    setup() {
        const { user } = getUser()

        return { user }
    }
}
</script>