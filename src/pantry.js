class Pantry {
  constructor(pantry, userID) {
    this.pantry = this.compileSameIngredients(pantry);

    console.log('PANTRY >>>>>>>>>>>>>>>', this.pantry);

    this.userID = userID;
  } 

  compileSameIngredients(pantry) {
    const uniquePantryItems = pantry.reduce((acc, pantryItem) => {

      if (!acc[pantryItem.ingredient]) {
        acc[pantryItem.ingredient] = pantryItem;
        console.log('pantryItem CREATE>>>>>>', pantryItem);
      } else {
        acc[pantryItem.ingredient].amount += pantryItem.amount;
        console.log('acc[pantryItem.ingredient].amount ADD>>>>>>', acc[pantryItem.ingredient].ingredient, acc[pantryItem.ingredient].amount);
      }

      // if (acc[pantryItem.ingredient]) {
      //   acc[pantryItem.ingredient].amount += pantryItem.amount;
      // } else {
      //   acc[pantryItem.ingredient] = pantryItem;
      // }

      // if (acc[pantryItem.ingredient].ingredient === '1123') {
      //   console.log('acc >>>>>>', acc);
      // }

      return acc
    }, {});
    return uniquePantryItems
  }

  compareIngredients(recipe) {
    let missing = []
    recipe.ingredients.forEach(ingredient => {
      if (!this.pantry[ingredient.id]) {
        missing.push({
          'missing': ingredient.name, 
          'amountNeeded': ingredient.quantity.amount,
        })
      } else if 
      (this.pantry[ingredient.id].amount < ingredient.quantity.amount) {
        missing.push({
          'missing': ingredient.name, 
          'amountNeeded': 
          (ingredient.quantity.amount - this.pantry[ingredient.id].amount),
        })
      }
    })
    return missing  
  }

  removeIngredients(recipe) {

    // console.log('recipe >>>>>>>', recipe);
    // console.log('this.userID >>>>>>>', this.userID);


    let apiUpdate = [];
    recipe.ingredients.forEach(ingredient => {
      if (this.pantry[ingredient.id]) {

        console.log('this.pantry[ingredient.id].amount >>>>>>>', this.pantry[ingredient.id], this.pantry[ingredient.id].amount);

        console.log('ingredient.quantity.amount >>>>>>>', ingredient.quantity.amount);



        this.pantry[ingredient.id].amount -= ingredient.quantity.amount;
        apiUpdate.push({
          userID: this.userID, 
          ingredientID: ingredient.id, 
          ingredientModification: -ingredient.quantity.amount,
        })
      }
    })
    return apiUpdate
  }
}

export default Pantry; 