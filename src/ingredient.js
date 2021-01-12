class Ingredient {
  constructor(dataIngredient, recipeIngredientData) {
    this.id = dataIngredient.id,
    this.name = recipeIngredientData.name,
    this.estimatedCostInCents = dataIngredient.estimatedCostInCents,
    this.quantity = recipeIngredientData.quantity
  }
}

export default Ingredient;