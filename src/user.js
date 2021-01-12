// import Pantry from '../src/pantry';

class User {
  constructor(user, pantry) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = pantry;

    // this.pantry = new Pantry(user.pantry, user.id);
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe, list) {
    if (!this[list].includes(recipe)) {
      this[list].push(recipe);
    }
  }

  removeRecipe(recipe, list) {
    const i = this[list].indexOf(recipe);
    this[list].splice(i, 1);
  }

  filterRecipes(tag, list) {
    return this[list].filter(recipe => recipe.tags.includes(tag));
  }
  
  searchForRecipe(keyword, list) {
    return this[list].filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.filter(ingredient => ingredient.name.includes(keyword)))
  }
}

module.exports = User;
