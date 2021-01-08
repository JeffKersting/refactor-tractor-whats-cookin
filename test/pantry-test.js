import { expect } from 'chai';
import User from '../src/user';
import userData from '../src/data/users-data';
import Recipe from '../src/recipe';
import recipeData from '../src/data/recipe-data';
import Ingredient from '../src/ingredient';
import ingredientData from '../src/data/ingredient-data';
import Pantry from '../src/pantry';


describe('Pantry', () => {
  let pantry, user, userInfo, recipe, ingredient, ingredientData;
  
  beforeEach(() => {
    pantry = new Pantry(user.pantry);
    userInfo = userData[0];
    console.log(userData[0])
    user = new User(userInfo);
    recipe = new Recipe(recipeData[0]);
    ingredient = new Ingredient(ingredientData[0], ingredientData);
  });

  describe('intialize', () => {
    it.only('should be an instance of Pantry class', () => {
      expect(pantry).to.be.an.instanceOf(Pantry);
    });
  });
});