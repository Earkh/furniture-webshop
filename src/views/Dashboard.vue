<template>
    <div class="col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
            <div class="card-header">
                Logged!
            </div>
            <div class="card-body">
                {{ user.email }}
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