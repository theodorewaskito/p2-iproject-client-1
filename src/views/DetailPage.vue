<template>
  <div class="mb-5 pb-5">
    <div class="favourite border container my-5 py-2 rounded" style="background-color: ">
      <div class="text-center m-4">
        <h1>{{recipe.recipe.label}}</h1>
      </div>
      <div class="d-flex justify-content-center">
        <img :src="recipe.recipe.image" alt="..." class="img-thumbnail">
      </div>
      <div class="m-5">
        <h5 class="mb-4">Ingredients :</h5>
        <ul 
          v-for="ing in ingredient"
          :key="ing"
          >
          <li>{{ing}}</li>
        </ul>
      </div>
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
      console.log('test');
      const ingredients = this.$store.state.recipe.recipe.ingredientLines
      return ingredients
      // return this.$store.state.recipe.ingredientLines.join('\n')
    }
  }
}
</script>

<style>
.favourite {
  background-color: white;
}
</style>