import ingredientsData from './data/ingredient-data'
// Will need to import fetched ingredient data from API
import Ingredient from './ingredient';

class Recipe {
  constructor(recipe, ingredientData) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = this.instantiateIngredients(recipe, ingredientsData);
    this.instructions = recipe.instructions;
    this.isFavorited = false;
    this.isToCook = false;
  }

  instantiateIngredients(recipe, ingredientsData) {

    return recipe.ingredients.map(recipeIngredient => {
      const ingredientInfo = ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
      if (ingredientInfo) {
        return new Ingredient(ingredientInfo, recipeIngredient);
      }
    });
  }

  calculateIngredientsCost() {
    const totalCost = this.ingredients.reduce((sum, ingredient) => {
      let ingredientCostPerRecipe =
      (ingredient.estimatedCostInCents * ingredient.quantity.amount);
      sum += ingredientCostPerRecipe;
      return sum;
    }, 0);
    return parseFloat((totalCost * 0.01).toFixed(2));
  }

  getInstructions() {
    return this.instructions;
  }

}

export default Recipe;
