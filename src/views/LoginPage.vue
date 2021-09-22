<template>
  <section class="d-flex justify-content-center py-5">
    <div class="form-login shadow-sm p-3 rounded col-6">
    <h1 class="mb-3 text-center">Login</h1>
      <form @submit.prevent="login">
        <div class="form-group py-3">
          <label for="exampleInputEmail1">Email address</label>
          <input 
            v-model="email" 
            type="email" 
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email">
        </div>
        <div class="form-group py-3 password">
          <label for="exampleInputPassword1">Password</label>
          <input 
            v-model="password" 
            type="password" 
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password">
        </div>
        <div class="d-grid gap-2 py-2 mt-4"> 
          <button type="submit" class="btn btn-success">Sign In</button>
        </div>
      </form>
      <router-link to="/">
        <div class="d-grid gap-2 pb-2"> 
          <button class="btn btn-danger">Cancel</button>
        </div>
      </router-link>

      <div class="text-center">
        <span>Not registered yet?</span>
        <router-link to="/register">
        <button id="to-register-form" type="button" class="btn" style="color: rgb(0, 89, 255);">Create an Account</button>
        </router-link>
      </div>
      
    </div>

  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch("submitLogin", payload)
      .then(({data}) => {
        localStorage.setItem("access_token", data.access_token)
        this.$router.push("/")
        this.$store.dispatch("fetchRecipes")
        this.$store.commit("SET_ISLOGIN", true)
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
  }
}
</script>

<style>

</style>