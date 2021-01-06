import { expect } from 'chai';

import User from '../src/user';
import data from '../src/data/users-data';

describe('User', () => {
  let user, userInfo, recipe

  beforeEach(() => {
    userInfo = data[0];
    user = new User(userInfo)

    recipe = {name: 'Chicken Parm', type: ['italian', 'dinner']};
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
    const list = 'favoriteRecipes';
    user.saveRecipe(recipe, list);
    expect(user.favoriteRecipes[0].name).to.equal('Chicken Parm');
  });

  it('should be able to remove a recipe from favoriteRecipes', () => {
    const list = 'favoriteRecipes';
    user.removeRecipe(recipe, list);
    expect(user.favoriteRecipes).to.deep.equal([])
  })

  it('should be able to save a recipe to recipesToCook', () => {
    const list = 'recipesToCook';
    user.saveRecipe(recipe, list);
    expect(user.recipesToCook[0].name).to.equal('Chicken Parm');
  });

  it('should be able to remove a recipe from recipesToCook', () => {
    const list = 'recipesToCook';
    user.removeRecipe(recipe, list);
    expect(user.recipesToCook).to.deep.equal([])
  })

  it('should be able to filter recipes by type', () => {
    user.saveRecipe(recipe);
    expect(user.filterRecipes('italian')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by name', () => {
    user.saveRecipe(recipe);
    expect(user.searchForRecipe('Chicken Parm')).to.deep.equal([recipe]);
  });
});
