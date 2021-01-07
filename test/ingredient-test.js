import { expect } from 'chai';

import Ingredient from '../src/ingredient';
import ingredientsData from '../src/data/ingredient-data';

describe.only('Ingredient', () => {
  let ingredient1;
  let ingredient2;
  let ingredient3;
  let ingredient4;
  let allingredients;

  beforeEach(() => {
    ingredient1 = new Ingredient(ingredientsData[0], ingredientsData);
    ingredient2 = new Ingredient(ingredientsData[1], ingredientsData);
    ingredient3 = new Ingredient(ingredientsData[2], ingredientsData);
    ingredient4 = new Ingredient(ingredientsData[3], ingredientsData);
    allingredients = [ingredient1, ingredient2, ingredient3, ingredient4];
  });

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', () => {
    expect(allingredients[0]).to.be.an.instanceof(Ingredient);
  });

  it('should initialize with an id number', () => {
    expect(allingredients[1].id).to.equal(18372);
  });

  it('should initialize with an name', () => {
    expect(allingredients[2].name).to.equal('Dirty Steve\'s Original Wing Sauce');
  });

  it('should initialize with an estimated amount the ingredient costs', () => {
    expect(allingredients[1].estimatedCostInCents).to.equal(582);
  });

});