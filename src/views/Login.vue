<template>
  <div class="login col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
    <div class="card">
        <div class="card-header">
            Login
        </div>
        <div class="card-body">
            <h6 class="card-title mb-2">Email</h6>
            <input type="text" name="email" class="mb-2" required>
            <h6 class="card-title mb-2">Password</h6>
            <input type="password" name="password" class="mb-2" required>
            <br>
            <a href="#" class="btn btn-vue">Login</a>
        </div>
        <div class="card-footer text-muted">
            Don't have an account? <router-link to="/register">Register here</router-link>
        </div>
    </div>
  </div>
</template>
<style>
    .btn-vue{
        background: #42b983;
        color: #fff;
    }
    .btn-vue:hover{
        background: #15A086;
        color: #fff;
    }
</style>