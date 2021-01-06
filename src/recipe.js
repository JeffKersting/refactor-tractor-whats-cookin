import ingredientsData from './data/ingredient-data'
// Will need to import fetched ingredient data from API
import Ingredient from './Ingredient';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = this.instantiateIngredients(recipe);
    this.instructions = recipe.instructions;
  }

  instantiateIngredients(recipe) {
    return recipe.ingredients.map(ing => {
      const ingredientInfo = ingredientsData.find(i => i.id === ing.id);
      return new Ingredient(ingredientInfo, ing);
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

  findInstructions() {
    return this.instructions;
  }

  filterByKeyword() {

  }

}

export default Recipe;
