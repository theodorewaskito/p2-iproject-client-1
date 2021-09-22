<template>
  <div class="d-flex justify-content-start flex-column" id="home-page">
    
    <!-- Drink Card -->
    <div class="container py-3">

      <!-- Card Start -->
      <div class="card mx-3">
        <div class="row ">

          <div class="col-md-7 px-3">
            <div class="card-block px-6">
              
              <h4 class="card-title">{{drinkDatas.strDrink}}</h4>
              <p class="card-text">{{drinkDatas.strAlcoholic}}</p>
              <p class="card-text">
                {{drinkDatas.strInstructions}}
              </p>
              <br>
            </div>
          </div>
          <!-- Carousel start -->
          <div class="col-md-5">
            <div id="CarouselTest" class="carousel slide" data-ride="carousel">
              
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img 
                    class="d-block" 
                    :src="drinkDatas.strDrinkThumb" 
                    alt=""
                    width="50%">
                </div>
                
              
              </div>
            </div>
          </div>
          <!-- End of carousel -->
        </div>
      </div>
      <!-- End of card -->

    </div>


    <form action="" class="form-filter m-2 pb-1 rounded">
        <div class="form-group m-3">
          <div class="input-group">
            <input
              v-model="search" 
              type="text" 
              id="form1"  
              class="form-control" 
              placeholder="Search"/>
            <button 
              @click.prevent="searchData"
              type="submit" 
              class="btn btn-success">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        
    </form>

    
    <div class="mx-3">
      <!-- Recipe Card -->
      <div class="row mx-2 d-flex justify-content-center">
        <RecipeCard
          v-for="recipeData in recipeDatas"
          :key="recipeData.recipe.label"
          :recipeData="recipeData"
        ></RecipeCard>
      </div>
    </div>
  </div>


</template>

<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
  name: "HomePage",
  components: {
    RecipeCard
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchData() {
      const payload = {
        keyword: this.search
      }
      this.$store.dispatch("fetchRecipes", payload)
        .then(({data}) => {
          this.$router.push("/")
          this.$store.commit("SET_RECIPEDATA", data)
        })
        .catch((err) => {
          console.log(err.response.data); 
      })
    }
  },
  created() {
    this.$store.dispatch("fetchDrinks")
    .then(({data}) => {
      // console.log(data.drinks[0].strDrink);
      const result = data.drinks[0]
      this.$store.commit("SET_DRINKDATA", result)
    })
    .catch((err) => {
      console.log(err.response.data);
    })
  },
  computed: {
    recipeDatas() {
      return this.$store.state.recipeDatas
    },
    drinkDatas() {
      return this.$store.state.drinkDatas
    }
  },
}
</script>

<style>
  .title {
    margin-bottom: 50px;
    text-transform: uppercase;
  }

  .card-block {
    font-size: 1em;
    position: relative;
    margin: 0;
    padding: 1em;
    border: none;
    border-top: 1px solid rgba(34, 36, 38, .1);
    box-shadow: none;
      
  }
  .card {
    font-size: 1em;
    overflow: hidden;
    padding: 5;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    margin-top:20px;
  }
  
  .btn {
    margin-top: auto;
  }
</style>