<template>
    <div class="register col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <h6 class="card-title mb-2">Name</h6>
                <input type="text" name="name" class="mb-2" required>
                <h6 class="card-title mb-2">Address</h6>
                <input type="text" name="Address" class="mb-2" required>
                <h6 class="card-title mb-2">Email</h6>
                <input type="text" name="email" class="mb-2" required>
                <h6 class="card-title mb-2">Password</h6>
                <input type="password" name="password" class="mb-2" required>
                <h6 class="card-title mb-2">Confirm Password</h6>
                <input type="password" name="password2" class="mb-2" required>
                <br>
                <a href="#" class="btn btn-vue">Register</a>
            </div>
            <div class="card-footer text-muted">
                Already have an account? <router-link to="/login">Login here</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card-body > input {
        width: 80% !important;
    }
</style>