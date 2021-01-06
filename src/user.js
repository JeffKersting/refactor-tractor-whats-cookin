class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe, list) {
    this[list].push(recipe);
  }

  removeRecipe(recipe, list) {
    const i = this[list].indexOf(recipe);
    this[list].splice(i, 1);
  }

  filterRecipes(type, list) {
    return this[list].filter(recipe => recipe.type.includes(type));
  }
  
  searchForRecipe(keyword, list) {
    return this[list].filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.includes(keyword));
  }
}

module.exports = User;
