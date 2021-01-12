class Pantry {
  constructor(pantry, userID) {
    this.pantry = this.compileSameIngredients(pantry);
    this.userID = userID;
  } 

  compileSameIngredients(pantry) {
    const uniquePantryItems = pantry.reduce((acc, pantryItem) => {
      if (acc[pantryItem.ingredient]) {
        acc[pantryItem.ingredient].amount += parseInt(pantryItem.amount);
      } else {
        acc[pantryItem.ingredient] = pantryItem;
      }
      return acc
    }, {});
    return uniquePantryItems
  }

  compareIngredients(recipe) {
    let missing = []
    recipe.ingredients.forEach(ingredient => {
      if (!this.pantry[ingredient.id]) {
        missing.push({
          'missing' : ingredient.name, 
          'amount' : ingredient.quantity.amount,
        })
      } else if (this.pantry[ingredient.id].amount < ingredient.quantity.amount) {
        missing.push({
          'missing' : ingredient.name, 
          'amount' : (ingredient.quantity.amount - this.pantry[ingredient.id].amount),
        })
      }
    })
    return missing  
  }

  removeIngredients(recipe) {
    let apiUpdate = [];
    recipe.ingredients.forEach(ingredient => {
      if (this.pantry[ingredient.id]) {
        this.pantry[ingredient.id].amount -= ingredient.quantity.amount;
        apiUpdate.push({
          userID: this.userID, 
          ingredientID: ingredient.id, 
          ingredientModification: this.pantry[ingredient.id].amount,
        })
      }
    })
    return apiUpdate
  }
}

export default Pantry; 