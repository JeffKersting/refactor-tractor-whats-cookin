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
    // return recipeIngrds;

    const totalCost = recipeIngrds.reduce((sum, recIngredient) => {

      recipeIngrds.forEach(ingredient => {

        let quantity = this.ingredients.reduce((amount, currentIngredient) => {
          amount = currentIngredient.quantity.amount;
          console.log('IMP amount >>>>>>>>>> ', amount);
          return amount;
        }, 0)

        sum += (ingredient.estimatedCostInCents * quantity)
      })

      return sum;
    }, 0);
    console.log('IMP totalCost >>>>>>>>>> ', totalCost);

    return parseFloat((totalCost * 0.01).toFixed(2));

  }

}

export default Recipe;
