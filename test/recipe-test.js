import { expect } from 'chai';

import Recipe from '../src/recipe';
import recipesData from '../src/data/recipe-data';
// import ingredientsData from '../src/data/ingredient-data';

describe.only('Recipe', () => {
  let recipe1;
  let recipe2;
  let recipe3;
  let recipe4;
  let allRecipes;
  // let allIngredients;

  beforeEach(() => {
    recipe1 = new Recipe(recipesData[0]);
    recipe2 = new Recipe(recipesData[1]);
    recipe3 = new Recipe(recipesData[2]);
    recipe4 = new Recipe(recipesData[3]);
    allRecipes = [recipe1, recipe2, recipe3, recipe4];
    // allIngredients = ingredientsData;
  })

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(allRecipes[0]).to.be.an.instanceof(Recipe);
    console.log('recipe >>>>>>> ', allRecipes[0]);
  });

  it('should initialize with an id number', () => {
    expect(allRecipes[1].id).to.equal(678353);
    console.log('recipe >>>>>>> ', allRecipes[1]);
  });

  it('should initialize with an name', () => {
    expect(allRecipes[2].name).to.equal('Dirty Steve\'s Original Wing Sauce');console.log('recipe >>>>>>> ', allRecipes[2]);
  });

  it('should initialize with an image', () => {
    expect(allRecipes[3].image).to.equal('https://spoonacular.com/recipeImages/741603-556x370.jpeg');
    console.log('recipe >>>>>>> ', allRecipes[3]);
  });

  it('should initialize with an array of ingredients', () => {
    expect(allRecipes[0].ingredients).to.be.an('Array');
    expect(allRecipes[0].ingredients).to.deep.equal([
      { name: 'all purpose flour', id: 20081, quantity: {
        "amount": 1.5,
        "unit": "c"
      } },
      { name: 'baking soda', id: 18372, quantity: {
        "amount": 0.5,
        "unit": "tsp"
      } },
      { name: 'egg', id: 1123, quantity: {
        "amount": 1,
        "unit": "large"
      } },
      { name: 'granulated sugar', id: 19335, quantity: {
        "amount": 0.5,
        "unit": "c"
      } },
      {
        name: 'instant vanilla pudding mix',
        id: 19206,
        quantity: {
          "amount": 3,
          "unit": "Tbsp"
        }
      },
      { name: 'light brown sugar', id: 19334, quantity: {
        "amount": 0.5,
        "unit": "c"
      } },
      { name: 'salt', id: 2047, quantity: {
        "amount": 0.5,
        "unit": "tsp"
      } },
      { name: 'sea salt', id: 1012047, quantity: {
        "amount": 24,
        "unit": "servings"
      } },
      {
        name: 'semisweet chocolate chips',
        id: 10019903,
        quantity: {
          "amount": 2,
          "unit": "c"
        }
      },
      { name: 'unsalted butter', id: 1145, quantity: {
        "amount": 0.5,
        "unit": "c"
      } },
      { name: 'vanilla extract', id: 2050, quantity: {
        "amount": 0.5,
        "unit": "tsp"
      } }
    ]);
    console.log('recipe >>>>>>> ', allRecipes[0]);
  });

  it('should calculate the total cost of all of the ingredients', () => {
    expect(allRecipes[1].calculateIngredientsCost()).to.equal();
    console.log('recipe >>>>>>> ', allRecipes[1])
  });
});
