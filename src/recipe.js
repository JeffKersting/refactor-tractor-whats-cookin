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
    // return this.ingredients.map(i => {
    //   ingredientData.find(ingredient => ingredient === i);
    // });
  }

}

export default Recipe;
