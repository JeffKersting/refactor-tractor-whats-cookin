import Recipe from "./recipe";

class RecipeRepository {
  constructor(recipesData = []) {
    this.recipeData = recipesData.map(recipeInfo => new Recipe(recipeInfo));
  }

  filterByKeyword(keywords) {
    const lowercaseKeywords = keywords.map(key => key.toLowerCase());
    const matchingTags = this.recipeData.filter(recipe => {
      return recipe.tags.some(tag => {
        return lowercaseKeywords.includes(tag.toLowerCase())
      });
    });

    const matchingIngredients = this.recipeData.filter(recipe => {
      return recipe.ingredients.some(ingredient => {
        return lowercaseKeywords.includes(ingredient.name.toLowerCase())
      });
    });
    const matchingName = this.recipeData.filter(recipe => {
      return lowercaseKeywords.includes(recipe.name.toLowerCase());
    });

    return [...matchingTags, ...matchingIngredients, ...matchingName]
  }

}

export default RecipeRepository;