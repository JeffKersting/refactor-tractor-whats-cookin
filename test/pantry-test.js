import { expect } from 'chai';
import User from '../src/user';
import userData from '../src/data/users-data';
import Recipe from '../src/recipe';
import recipeData from '../src/data/recipe-data';
import Ingredient from '..src/ingredient'
import ingredientData from '..src/data/ingredient-data'

describe('Pantry', () => {
  let user, userInfo, recipe, ingredient, ingredientData;

  beforeEach(() => {
    userInfo = userData[0];
    user = new User(userInfo);
    recipe = recipeData[0];
    ingredient = new Ingredient(ingredientData[0], ingredientData);
  });
});