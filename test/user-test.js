import { expect } from 'chai';

import User from '../src/user';
import userData from '../src/data/users-data';
import recipeData from '../src/data/recipe-data';

describe('User', () => {
  let user, userInfo, recipe

  beforeEach(() => {
    userInfo = userData[0];
    user = new User(userInfo)
    recipe = recipeData[0];
  });

  describe('initialize', () => {
    it('should be a function', () => {
      expect(User).to.be.a('function');
    });
  
    it('should initialize with an id', () => {
      expect(user.id).to.eq(1);
    });
  
    it('should initialize with a name', () => {
      expect(user.name).to.eq('Saige O\'Kon');
    });
  
    it('should initialize with a pantry', () => {
      expect(user.pantry[0].ingredient).to.eq(11477);
    });
  
    it('should initialize with an empty favoriteRecipes array', () => {
      expect(user.favoriteRecipes).to.deep.equal([]);
    });
  
    it('should initialize with an empty recipesToCook array', () => {
      expect(user.recipesToCook).to.deep.equal([]);
    });
  });

  describe('method', () => {
    it('should be able to save a recipe to a list', () => {
      user.saveRecipe(recipe, 'favoriteRecipes');

      expect(user.favoriteRecipes).to.deep.equal([recipe]);
    });

    it('should be able to remove a recipe from a list', () => {
      user.removeRecipe(recipe, 'recipesToCook');

      expect(user.recipesToCook).to.deep.equal([]);
    });
  
    it('should be able to filter favorite recipes by tag', () => {
      user.saveRecipe(recipe, 'favoriteRecipes');
  
      expect(user.filterRecipes('snack', 'favoriteRecipes')).to.deep.equal([recipe]);
    });

    it('should be able to search recipes by name', () => {
      user.saveRecipe(recipe, 'recipesToCook');
  
      expect(user.searchForRecipe('Loaded Chocolate Chip Pudding Cookie Cups', 'recipesToCook')).to.deep.equal([recipe]);
    });

    it('should be able to search recipes by ingredient', () => {
      user.saveRecipe(recipe, 'favoriteRecipes');
  
      expect(user.searchForRecipe('flour', 'favoriteRecipes')).to.deep.equal([recipe]);
    });
  });
});
