<template>
  <div class="login col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
    <div class="card">
        <div class="card-header">
            Login
        </div>
        <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
                <h6 class="card-title mb-2">Email</h6>
                <input type="text" name="email" class="mb-2" required v-model="user.email">
                <h6 class="card-title mb-2">Password</h6>
                <input type="password" name="password" class="mb-2" required v-model="user.password">
                <br>
                <button type="submit" class="btn btn-vue">Login</button>
            </form>
        </div>
        <div class="card-footer text-muted">
            Don't have an account? <router-link to="/register">Register here</router-link>
        </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
require('firebase/auth')
import { projectFirestore } from '../firebase/config'

const res = projectFirestore.collection('users');

export default {
    data() {
    return {
        user: {
        name: '',
        address: '',
        email: '',
        password: ''
        },
        error: null
    };
    },
    methods: {
        submit() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.user.email, this.user.password)
            .then((user) => {
                this.$router.replace({ name: "Dashboard" });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
    }
};
</script>
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