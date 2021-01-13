import { expect } from 'chai';
import User from '../src/User';
import userData from '../src/data/users-data';
import Recipe from '../src/Recipe';
import recipeData from '../src/data/recipe-data';
import Pantry from '../src/pantry';


describe('Pantry', () => {

  describe('instantiate', () => {
    let pantry, userInfo
  
    beforeEach(() => {
      userInfo = new User(userData[0]);
      pantry = userInfo.pantry;
    });

    it('should be an instance of Pantry class', () => {
      expect(pantry).to.be.an.instanceof(Pantry);
    });

  });

  describe('method', () => {
    let pantry, userInfo, recipe 
  
    beforeEach(() => {
      userInfo = new User(userData[0]);
      pantry = userInfo.pantry;
      recipe = new Recipe(recipeData[0]);
    });

    it('should consolidate duplicate ingredients', () => {
      const ingredientKey = Object.keys(pantry.pantry)[0];
      const ingredient1 = pantry.pantry[ingredientKey];

      expect(Object.keys(pantry.pantry).length).to.equal(113)
      expect(ingredient1.amount).to.equal(18)
    });

    it('should return ingredients that is missing from pantry in array', () => {
      const missingIngredients = pantry.compareIngredients(recipe);

      expect(missingIngredients).to.deep.equal([
        {missing: 'sea salt', amountNeeded: 24},
        {missing: 'semisweet chocolate chips', amountNeeded: 2 }
      ]);

    });

    it('should remove ingredients from the data and updates api', () => {
      const ingredientModifications = pantry.removeIngredients(recipe);
  
      expect(ingredientModifications).to.deep.equal([
        { userID: 1, ingredientID: 20081, ingredientModification: -1.5 },
        { userID: 1, ingredientID: 18372, ingredientModification: -0.5 },
        { userID: 1, ingredientID: 1123, ingredientModification: -1 },
        { userID: 1, ingredientID: 19335, ingredientModification: -0.5 },
        { userID: 1, ingredientID: 19206, ingredientModification: -3 },
        { userID: 1, ingredientID: 19334, ingredientModification: -0.5 },
        { userID: 1, ingredientID: 2047, ingredientModification: -0.5 },
        { userID: 1, ingredientID: 1145, ingredientModification: -0.5 },
        { userID: 1, ingredientID: 2050, ingredientModification: -0.5 }
      ])
    })
  });
});