import { expect } from 'chai';

import Recipe from '../src/recipe';
import recipesData from '../src/data/recipe-data';
import RecipeRepository from '../src/recipe-repository';


describe.only('RecipeRepository', () => {
  let recipe1;
  let recipe2;
  let recipe3;
  let recipe4;
  let allRecipes;
  let recipeRepo;

  beforeEach(() => {
    allRecipes = recipesData.map(recipeInfo => {
      const recipe = new Recipe(recipeInfo);
      return recipe;
    });

    recipeRepo = new RecipeRepository(allRecipes);

    recipe1 = recipeRepo[0];
    recipe2 = recipeRepo[1];
    recipe3 = recipeRepo[2];
    recipe4 = recipeRepo[3];

  })

  

});