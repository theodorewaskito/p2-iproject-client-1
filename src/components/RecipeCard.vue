<template>

  <div class="card my-3 mx-4 text-center" style="width: 18rem;">
    <img :src="recipeData.recipe.image">
    <div class="card-body">
      <h5 class="card-title">{{recipeData.recipe.label}}</h5>
      <p class="card-text"></p>
      <a
        @click.prevent="detailRecipe(i)" 
        href="#" 
        class="btn btn-success mx-2"
      >Details</a>
      <button
        @click.prevent="detailRecipe(i)" 
        type="button" 
        class="btn btn-success mx-2"
      ><i class="fas fa-bookmark"></i></button>
    </div>
  </div>

</template>

<script>
export default {
  name: "RecipeCard",
  props: [ "recipeData", "i" ],
  methods: {
    detailRecipe(i) {
      console.log(this.recipeData);
      this.$store.commit("SET_RECIPE", this.recipeData)
      this.$router.push(`/detail/${i}`)
    } 
  }
}
</script>

<style>

</style>