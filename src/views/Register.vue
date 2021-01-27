<template>
    <div class="register col-xs-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <div v-if="error" class="alert alert-danger">{{error}}</div>
                <form action="#" @submit.prevent="submit">
                    <h6 class="card-title mb-2">Name</h6>
                    <input type="text" id="name" name="name" class="form-control mb-2" v-model="user.name" required>
                    <h6 class="card-title mb-2">Address</h6>
                    <input type="text" id="address" name="Address" class="form-control mb-2" v-model="user.address" required>
                    <h6 class="card-title mb-2">Email</h6>
                    <input type="email" id="email" name="email" class="form-control mb-2" v-model="user.email" required>
                    <h6 class="card-title mb-2">Password</h6>
                    <input type="password" id="password" name="password" class="form-control mb-2" v-model="user.password" required>
                    <h6 class="card-title mb-2">Confirm Password</h6>
                    <input type="password" name="form-control password2" class="mb-2" required>
                    <br>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
            <div class="card-footer text-muted">
                Already have an account? <router-link to="/login">Login here</router-link>
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
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name
            })
            .then(() => {
                this.$router.push('/login')
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
<style scoped>
    .card-body > input {
        width: 80% !important;
    }
</style>