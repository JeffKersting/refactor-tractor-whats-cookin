class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData || [];
  }

  filterByKeyword(keyword) {
    return this.recipeData.filter(recipe => recipe.tags.includes(keyword) || recipe.ingredients.filter(ingredient => ingredient.name.includes(keyword)))
  };
  
}

export default RecipeRepository;