<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <HFooter class="position-relative"></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  components: { 
    Navbar,
    HFooter
  },
  name: "App",
  created() {
    if(localStorage.access_token) {
      this.$store.commit("SET_ISLOGIN", true)
    } else {
      this.$store.commit("SET_ISLOGIN", false)
    }
  }
}
</script>

<style>
.form-login, .form-register {
  background-color: white;
}

.d-flex {
  background-color: #ECDBBA;
}
</style>
