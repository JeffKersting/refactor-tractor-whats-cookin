class Ingredient {
  constructor(ingredient, recipeIngredientData) {
    // console.log('recipeIngredientData.name >>>', recipeIngredientData.name);
    // console.log('ingredient.name >>>', ingredient.name);

    
    this.id = ingredient.id,
    // console.log('ingredient.id >>>', ingredient.id);
    this.name = recipeIngredientData.name,
    this.estimatedCostInCents = ingredient.estimatedCostInCents,
    this.quantity = recipeIngredientData.quantity
  }
}

export default Ingredient;