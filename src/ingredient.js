class Ingredient {
  constructor(ingredient, recipeIngredientData) {
    this.id = ingredient.id,
    this.name = recipeIngredientData.name,
    this.estimatedCostInCents = ingredient.estimatedCostInCents,
    this.quantity = recipeIngredientData.quantity
  }
}

export default Ingredient;