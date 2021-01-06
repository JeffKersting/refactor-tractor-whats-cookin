import ingredientsData from './data/ingredient-data'
// Will need to import fetched API data
import Ingredient from './Ingredient';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients.map(ing => {
      const ingredientInfo = ingredientsData.find(i => i.id === ing.id);

      console.log('CNST ingredientInfo >>>>>>>>>> ', ingredientInfo);

      return new Ingredient(ingredientInfo, ing);
    });
    this.instructions = recipe.instructions;
  }
  
  calculateIngredientsCost() {

    console.log('IMP this.ingredients >>>>>>>>>> ', this.ingredients);

    const totalCost = this.ingredients.reduce((sum, ingredient) => {



      return sum;
    }, 0);

    console.log('IMP totalCost >>>>>>>>>> ', totalCost);

    // return parseFloat((totalCost * 0.01).toFixed(2));

  }

}

export default Recipe;
