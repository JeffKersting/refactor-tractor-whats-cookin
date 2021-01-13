import { expect } from 'chai';

import Recipe from '../src/Recipe';
import recipesData from '../test/test-data/recipe-test-data';

describe('Recipe', () => {
  let recipe1, recipe2, recipe3, recipe4, allRecipes;

  beforeEach(() => {
    recipe1 = new Recipe(recipesData[0]);
    recipe2 = new Recipe(recipesData[1]);
    recipe3 = new Recipe(recipesData[2]);
    recipe4 = new Recipe(recipesData[3]);
    allRecipes = [recipe1, recipe2, recipe3, recipe4];
  })

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(allRecipes[0]).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id number', () => {
    expect(allRecipes[1].id).to.equal(678353);
  });

  it('should initialize with an name', () => {
    expect(allRecipes[2].name).to.equal('Dirty Steve\'s Original Wing Sauce');
  });

  it('should initialize with an image', () => {
    expect(allRecipes[3].image).to.equal
    ('https://spoonacular.com/recipeImages/741603-556x370.jpeg');
  });

  it('should initialize with an array of ingredients', () => {
    expect(allRecipes[0].ingredients).to.be.an('Array');
    expect(allRecipes[0].ingredients).to.deep.equal([
      { name: 'all purpose flour', id: 20081, "estimatedCostInCents": 142, quantity: {
        "amount": 1.5,
        "unit": "c"
      } },
      { name: 'baking soda', id: 18372, "estimatedCostInCents": 582, quantity: {
        "amount": 0.5,
        "unit": "tsp"
      } },
      { name: 'egg', id: 1123, "estimatedCostInCents": 472, quantity: {
        "amount": 1,
        "unit": "large"
      } },
      { name: 'granulated sugar', id: 19335, "estimatedCostInCents": 902, quantity: {
        "amount": 0.5,
        "unit": "c"
      } },
      {
        name: 'instant vanilla pudding mix',
        id: 19206,
        "estimatedCostInCents": 660, quantity: {
          "amount": 3,
          "unit": "Tbsp"
        }
      },
      { name: 'light brown sugar', id: 19334, "estimatedCostInCents": 559, quantity: {
        "amount": 0.5,
        "unit": "c"
      } },
      { name: 'salt', id: 2047, "estimatedCostInCents": 280, quantity: {
        "amount": 0.5,
        "unit": "tsp"
      } },
      { name: 'sea salt', id: 1012047, "estimatedCostInCents": 528, quantity: {
        "amount": 24,
        "unit": "servings"
      } },
      {
        name: 'semisweet chocolate chips',
        id: 10019903,
        "estimatedCostInCents": 253, quantity: {
          "amount": 2,
          "unit": "c"
        }
      },
      { name: 'unsalted butter', id: 1145, "estimatedCostInCents": 617, quantity: {
        "amount": 0.5,
        "unit": "c"
      } },
      { name: 'vanilla extract', id: 2050, "estimatedCostInCents": 926, quantity: {
        "amount": 0.5,
        "unit": "tsp"
      } }
    ]);
  });

  it('should calculate the total cost of all needed ingredients', () => {
    let totalCost = allRecipes[1].calculateIngredientsCost();
    expect(totalCost).to.equal(272.97);
  });

  it('should return the instructions to cook the recipe', () => {
    let recipeInstructions = allRecipes[2].getInstructions();
    expect(recipeInstructions).to.deep.equal([
      {
        "number": 1,
        "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined."
      }
    ]);
  });

});
