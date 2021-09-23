<template>
  <div class="container border my-5 py-2 rounded" cols="10">
    <div class="text-center">
      <h1>{{recipe.recipe.label}}</h1>
    </div>
    <div class="d-flex justify-content-center">
      <img :src="recipe.recipe.image" alt="..." class="img-thumbnail">
    </div>
    <div>
      <p>{{recipe.recipe.ingredientLines}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  computed: {
    recipe() {
      return this.$store.state.recipe
    },
    ingredient() {
      return this.$store.state.recipe.ingredientLines.split(",")
    }
  }
}
</script>

<style>

</style>