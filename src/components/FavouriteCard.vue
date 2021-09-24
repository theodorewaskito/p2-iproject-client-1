<template>
  <div class="card my-3 mx-4 text-center" style="width: 18rem;">
    <img :src="favData.recipeImage">
    <div class="card-body">
      <h5 class="card-title">{{favData.recipeName}}</h5>
      <p class="card-text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavouriteCard",
  props: [ "favData" ]
}
</script>

<style>

</style>