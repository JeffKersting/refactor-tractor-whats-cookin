import ingredientsData from './data/ingredient-data'

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  }
  
  calculateIngredientsCost() {
    const recipeIngrds = this.ingredients.map(i => {
      return ingredientsData.find(ingredient => ingredient.id === i.id);
    });
    console.log('IMP recipeIngrds >>>>>>>>>> ', recipeIngrds);
    return recipeIngrds;
  }

  // calculateIngredientsCost() {
  //   const recipeIngredients = this.ingredients.map(recipeIngredient => {
  //     return ingredientsData.find(ingredient => {
  //       ingredient.id === recipeIngredient.id
  //     });
  //   });
  
  //   console.log('recipeIngredients >>>>>>> ', recipeIngredients);
  //   return recipeIngredients;
  // }

}

export default Recipe;
