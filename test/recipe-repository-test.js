import { expect } from 'chai';

import Ingredient from '../src/ingredient';
import ingredientsData from '../src/data/ingredient-data';
import Recipe from '../src/recipe';
import recipesData from '../src/data/recipe-data';
import RecipeRepository from '../src/recipe-repository';


describe.only('RecipeRepository', () => {
  // let ingredient1;
  // let ingredient2;
  // let ingredient3;
  // let ingredient4;
  // let allingredients;
  let recipe1;
  let recipe2;
  let recipe3;
  let recipe4;
  let allRecipes;
  let recipeRepo;

  beforeEach(() => {

    // ingredient2 = new Ingredient(ingredientsData[1], ingredientsData);
    // ingredient3 = new Ingredient(ingredientsData[2], ingredientsData);
    // ingredient1 = new Ingredient(ingredientsData[0], ingredientsData);
    // ingredient4 = new Ingredient(ingredientsData[3], ingredientsData);
    // allingredients = [ingredient1, ingredient2, ingredient3, ingredient4];

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

  it('should be a function', () => {
    expect(recipeRepo).to.be.a('function');
  });

  it('should be an instance of the RecipeRepository class', () => {
    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });

  it('should store instances of the Recipe class', () => {
    expect(recipeRepo.recipeData[1]).to.be.an.instanceof(Recipe);
    expect(recipeRepo.recipeData[0]).to.deep.equal([13, 44, 49, 33, 10]);
  });

  it('should be able to search the collection of recipes by type / tag', () => {
    let filteredRecipes = recipeRepo.filterByKeyword('side dish');
    console.log(recipeRepo)
    expect(filteredRecipes).to.deep.equal([0]);
  });

  it('should be able to search the collection of recipes by a set of tags', () => {
    let filteredRecipes = allRecipes[3].filterByKeyword('side dish');
    console.log(allRecipes[3])
    expect(filteredRecipes).to.deep.equal([0]);
  });

  it('should be able to search the collection of recipes by ingredient', () => {
    let filteredRecipes = allRecipes[0].filterByKeyword('brown sugar');
    console.log(allRecipes[0])
    expect(filteredRecipes).to.deep.equal([0]);
  });

});