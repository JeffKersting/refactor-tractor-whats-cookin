class Pantry {
  constructor(pantry) {
    this.pantry = pantry;
  }

  compareIngredient() {
    let result = recipe.ingredients.filter(recipeIng => {
      const findIng = this.pantry.find(pantryIng => { 
        return pantryIng.ingredient === recipeIng.id && pantryIng.amount < recipeIng.quantity.amount
      })
    const noIngNeeded = !this.pantry.find(pantryIng => pantryIng.ingredient === recipeIng.id);
    return findIng || noIngNeeded;
    })
    return result;
  }

  reviewMissingIngredients(missingIngredient = []) {
    const newMissingIngNum;
    let newList = missingIngredient.map(missingIng => {
      let findResult = this.pantry.find(pantryIng => pantryIng.ingredient === missingIng.id);
      if (findResult) {
        newMissingIngNum =  missingIng.quantity.amount - findResult.amount;
      } else {
        newMissingIngNum = missingIng.quantity.amount
      }
      return {amount: newMissingIngNum, unit: missingIng.quantity.unit, id: missingIng.id};
    })
    return newList;
  }
}

export default Pantry; 