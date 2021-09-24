<template>
  <div class="page d-flex row-1 mb-5 pb-5" id="home-page">
    <div class="row justify-content-center m-3">
      <h1>Favorites</h1>
      <!-- Favourite Card -->
      <FavouriteCard
          v-for="favData in favDatas"
          :key="favData.id"
          :favData="favData"
      ></FavouriteCard>
    </div>
  </div>
</template>

<script>
import FavouriteCard from '../components/FavouriteCard.vue'

export default {
  components: { FavouriteCard },
  name: "FavouritePage",
  created() {
    this.$store.dispatch("fetchFav")
    .then(({data}) => {
      // console.log(data);
      this.$store.commit("SET_FAVDATA", data)
    })
    .catch((err) => {
      console.log(err.response.data);
    })
  },
  computed: {
    favDatas() {
      return this.$store.state.favDatas
    },
  }
}
    
</script>

<style>

</style>