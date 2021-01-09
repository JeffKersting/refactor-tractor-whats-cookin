import { expect } from 'chai';
import userData from '../src/data/users-data';
import Recipe from '../src/recipe';
import recipeData from '../src/data/recipe-data';
import Pantry from '../src/pantry';


describe('Pantry', () => {
  let pantry, userInfo, recipe 
  
  beforeEach(() => {
    userInfo = userData[0];
    pantry = new Pantry(userInfo.pantry, userInfo.id);
    recipe = new Recipe(recipeData[0]);
  });

  describe.only('instantiate', () => {
    it('should be an instance of Pantry class', () => {
      expect(pantry).to.be.an.instanceof(Pantry);
    });
  });


  describe.only('method', () => {
    it('should return ingredients that is missing from pantry in array', () => {
      const result = pantry.compareIngredients(recipe);

      expect(result).to.deep.equal([
        {missing: 'sea salt', amount: 24},
        {missing: 'semisweet chocolate chips', amount: 2 }
      ]);
    });

    it('should remove ingredients from the data and updates api', () => {
     const result = pantry.removeIngredients(recipe);
  
      expect(result).to.deep.equal([
        { userID: 1, ingredientID: 20081, ingredientModification: 38.5 },
        { userID: 1, ingredientID: 18372, ingredientModification: 14.5 },
        { userID: 1, ingredientID: 1123, ingredientModification: 69 },
        { userID: 1, ingredientID: 19335, ingredientModification: 22.5 },
        { userID: 1, ingredientID: 19206, ingredientModification: 9 },
        { userID: 1, ingredientID: 19334, ingredientModification: 2.5 },
        { userID: 1, ingredientID: 2047, ingredientModification: 34.5 },
        { userID: 1, ingredientID: 1145, ingredientModification: 24.5 },
        { userID: 1, ingredientID: 2050, ingredientModification: 41.5 }
        ])
    })
  });
});