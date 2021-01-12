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

  afterEach(() => {
    // runs after each test in this block
    userInfo = null;
    pantry = null;
    recipe = null;
  });
  
  describe('instantiate', () => {

    // beforeEach(() => {
    //   const userInfo = userData[0];
    //   const pantry = new Pantry(userInfo.pantry, userInfo.id);
    //   const recipe = new Recipe(recipeData[0]);
    // });
  
    // afterEach(() => {
    //   // runs after each test in this block
    // });

    it('should be an instance of Pantry class', () => {
      // const userInfo = userData[0];
      // const pantry = new Pantry(userInfo.pantry, userInfo.id);
      // const recipe = new Recipe(recipeData[0]);

      expect(pantry).to.be.an.instanceof(Pantry);
    });

  });

  describe('method', () => {

    // beforeEach(() => {
    //   const userInfo = userData[0];
    //   const pantry = new Pantry(userInfo.pantry, userInfo.id);
    //   const recipe = new Recipe(recipeData[0]);
    // });
  
    // afterEach(() => {
    //   // runs after each test in this block
    // });

    it('should consolidate duplicate ingredients', () => {
      // const userInfo = userData[0];
      // const pantry = new Pantry(userInfo.pantry, userInfo.id);
      // const recipe = new Recipe(recipeData[0]);

      // const alsPantry = [
      //   {
      //     "ingredient": 11477,
      //     "amount": 1
      //   },
      //   {
      //     "ingredient": 11297,
      //     "amount": 3
      //   },
      //   {
      //     "ingredient": 11477,
      //     "amount": 5
      //   },
      // ]
      // const alsUserPantry = new Pantry(alsPantry, 666)
      // expect(Object.keys(alsUserPantry.pantry).length).to.equal(2)
      // expect(Object.keys(alsUserPantry.pantry)[0].amount).to.equal(6)

      console.log('pantry >>>>>>>>>>', pantry);

      expect(pantry.length).to.equal(2)
      expect(pantry[0].amount).to.equal(6)
    });

    it('should return ingredients that is missing from pantry in array', () => {

      // const alsPantry = [
      //   {
      //     "ingredient": 11477,
      //     "amount": 1
      //   },
      //   {
      //     "ingredient": 11297,
      //     "amount": 3
      //   },
      //   {
      //     "ingredient": 11477,
      //     "amount": 5
      //   },
      // ]
      // const alsUserPantry = new Pantry(alsPantry, 666)

      // const result = alsUserPantry.compareIngredients(recipe);

      // expect(result).to.deep.equal([
      //   {missing: 'sea salt', amountNeeded: 24},
      //   {missing: 'semisweet chocolate chips', amountNeeded: 2 }
      // ]);

      console.log('pantry >>>>>>>>>>', pantry);

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