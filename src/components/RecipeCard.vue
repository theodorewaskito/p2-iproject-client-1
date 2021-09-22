<template>

  <div class="card my-3 mx-4 text-center" style="width: 18rem;">
    <img :src="recipeData.recipe.image">
    <div class="card-body">
      <h5 class="card-title">{{recipeData.recipe.label}}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-success">Details</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "RecipeCard",
  props: [ "recipeData" ]
}
</script>

<style>

</style>