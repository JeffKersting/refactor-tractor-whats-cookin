class Pantry {
  constructor(pantry) {
    this.pantry = pantry;
  }

  compareIngredient() {
    let result = recipe.ingredients.filter(recipeIng => {
      const findIng = this.pantry.find(pantryIng => { 
        return pantryIng.ingredient === recipeIng.id && pantryIng.amount < recipeIng.quantity.amount
      });
    const noIngNeeded = !this.pantry.find(pantryIng => pantryIng.ingredient === recipeIng.id);
    return findIng || noIngNeeded;
    })
    return result;
  }
}

export default Pantry; 