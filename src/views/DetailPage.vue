<template>
  <div class="container border my-5 py-2 rounded" cols="10">
    <div class="text-center">
      <h1>{{recipe.recipe.label}}</h1>
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
    }
  }
}
</script>

<style>

</style>