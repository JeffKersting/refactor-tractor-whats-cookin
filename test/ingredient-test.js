import { expect } from 'chai';

import recipesData from '../test/test-data/recipe-test-data';
import Recipe from '../src/Recipe';
import Ingredient from '../src/ingredient';

describe.only('Ingredient', () => {
  let recipe, ingredient1, ingredient2, ingredient3, ingredient4;

  beforeEach(() => {
    recipe = new Recipe(recipesData[0]);
    ingredient1 = recipe.ingredients[0];
    ingredient2 = recipe.ingredients[1];
    ingredient3 = recipe.ingredients[2];
    ingredient4 = recipe.ingredients[3];
  });

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', () => {
    expect(ingredient1).to.be.an.instanceof(Ingredient);
  });

  it('should initialize with an id number', () => {
    expect(ingredient2.id).to.equal(18372);
  });

  it('should initialize with an name', () => {
    expect(ingredient3.name).to.equal('egg');
  });

  it('should initialize with an estimated amount the ingredient costs', () => {
    expect(ingredient4.estimatedCostInCents).to.equal(902);
  });

  it('should initialize with a quantity needed for the relevant recipe', () => {
    expect(ingredient1.quantity).to.deep.equal({ amount: 1.5, unit: 'c' });
  });

});