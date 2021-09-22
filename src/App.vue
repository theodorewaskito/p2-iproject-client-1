<template>
  <div id="app" class="container">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { 
    Navbar 
  },
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
