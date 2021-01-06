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

  it('should be able to save a recipe to favoriteRecipes', () => {
    user.saveRecipe(recipe, 'favoriteRecipes');
    expect(user.favoriteRecipes[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should be able to remove a recipe from favoriteRecipes', () => {
    user.removeRecipe(recipe, 'favoriteRecipes');
    expect(user.favoriteRecipes).to.deep.equal([])
  })

  it('should be able to save a recipe to recipesToCook', () => {
    user.saveRecipe(recipe, 'recipesToCook');
    expect(user.recipesToCook[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should be able to remove a recipe from recipesToCook', () => {
    user.removeRecipe(recipe, 'recipesToCook');
    expect(user.recipesToCook).to.deep.equal([])
  })

  it('should be able to filter favorite recipes by tag', () => {
    user.saveRecipe(recipe, 'favoriteRecipes')
    user.filterRecipes('snack', 'favoriteRecipes');
    expect(recipe).to.deep.equal(['Loaded Chocolate Chip Pudding Cookie Cups']);
  });

  it('should be able to filter recipes to cook by tag', () => {
    user.filterRecipes(tag, 'recipesToCook');
    expect(user.filterRecipes('starter')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by name', () => {
    user.saveRecipe(recipe);
    expect(user.searchForRecipe('Chicken Parm')).to.deep.equal([recipe]);
  });
});
