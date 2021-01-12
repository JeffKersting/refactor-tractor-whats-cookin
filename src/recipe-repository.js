class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData || [];
  }

  filterByKeyword(keyword) {

    console.log('keyword >>>>>>', keyword);
    

    return (this.recipeData.filter(recipe => recipe.tags.includes(keyword)))
    || (recipe.ingredients.filter(ingredient => ingredient.name.includes(keyword)))
  }


  searchForRecipe(keyword, list) {
    return this[list].filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.filter(ingredient => ingredient.name.includes(keyword)))
  }
  
}

export default RecipeRepository;