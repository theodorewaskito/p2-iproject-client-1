<template>
  <div class="mb-5 pb-5"> 
    <section class="d-flex justify-content-center p-5" >
      <div class="form-register shadow-sm p-3 rounded">
      <h1 class="mb-5">Registration</h1>
        <form @submit.prevent="register" class=" row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="inputPassword4">
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Phone Number</label>
            <input v-model="phoneNumber" type="text" class="form-control" id="inputAddress" placeholder="081XXXXXXXX">
          </div>
          <div class="d-grid gap-2 py-2 mt-4">
            <button type="submit" class="btn btn-success">Sign up</button>
          </div>
        </form>

        <router-link to="/">
          <div class="d-grid gap-2 pb-2"> 
            <button class="btn btn-danger">Cancel</button>
          </div>
        </router-link>

        <div class="text-center">
          <span>Already have an account?</span>
          <router-link to="/login">
            <button id="to-login-form" type="button" class="btn" style="color: rgb(0, 89, 255);">Sign in here</button>
          </router-link>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: '',
      password: '',
      phoneNumber: ''
    }
  },
  methods: {
    register() {
      const payload = {
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber
      }
      this.$store.dispatch("submitRegister", payload)
      .then(({data}) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucess!',
          text: 'You are registered, please Login'
        })
        this.$router.push("/login")
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message[0]
        })
      })
    }
  }
}
</script>

<style>

</style>