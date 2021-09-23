<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="" class="pe-3"><img src="https://i.ibb.co/yg9gt2G/Logo-Makr-5nt54w.png" alt="Logo-Makr-5y0-Jgr" width="100px"/></a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              aria-current="page" 
              to="/"
            >Recipes</router-link>
          </li>
          <li class="nav-item">
            <router-link 
              v-if="isLogin"
              class="nav-link" 
              aria-current="page" 
              to="/Chat"
            >Favourite</router-link>
          </li>
        </ul>
      </div>
      <div class="mx-1">
        <router-link to="/register">
          <button 
            v-if="!isLogin"
            type="button" 
            class="btn btn-success"
          > Register</button>
        </router-link>
      </div>
      <div 

        class="mx-1">
        <router-link to="/login">
          <button 
            v-if="!isLogin"
            type="button" 
            class="btn btn-success"
          >Sign In</button>
        </router-link>
      </div>
      <div
        
        class="ms-1">
        <button 
          v-if="isLogin"
          @click.prevent="logout"
          type="button" 
          class="btn btn-danger"
          >Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear()
      this.$store.commit("SET_ISLOGIN", false)
      this.$router.push("/")
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>