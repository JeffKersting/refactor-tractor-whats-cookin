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

    // it('should have a pantry', () => {
    //   expect(pantry.pantry.length).to.equal(113);
    // })
  })


  describe.only('method', () => {
    it('should return ingredients that is missing from pantry in array', () => {
      const result = pantry.compareIngredients(recipe);
      const result1 = pantry.removeIngredients(recipe)

      expect(result).to.deep.equal([
        {missing: 'sea salt', amount: 24},
        {missing: 'semisweet chocolate chips', amount: 2 }
      ]);
    });
  });
});