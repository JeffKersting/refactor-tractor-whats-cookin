import { expect } from 'chai';

import Recipe from '../src/recipe';
import recipesData from '../test/test-data/recipe-test-data';
import RecipeRepository from '../src/Recipe-Repository';


describe('RecipeRepository', () => {
  let recipe1, recipe2, recipe3, shallowRecipes, shallowRecipeRepo;

  beforeEach(() => {
    shallowRecipes = [recipesData[0], recipesData[1], recipesData[2]];
    shallowRecipeRepo = new RecipeRepository(shallowRecipes);
    recipe1 = shallowRecipeRepo.recipeData[0];
    recipe2 = shallowRecipeRepo.recipeData[1];
    recipe3 = shallowRecipeRepo.recipeData[2];
  })

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of the RecipeRepository class', () => {
    expect(shallowRecipeRepo).to.be.an.instanceof(RecipeRepository);
  });

  it('should create & store instances of the Recipe class', () => {
    const dirtySteveRecipe = new Recipe({
      "name": "Dirty Steve's Original Wing Sauce",
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "name": "black pepper",
          "id": 1002030,
          "estimatedCostInCents": 441,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "brown sugar",
          "id": 19334,
          "estimatedCostInCents": 559,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "name": "butter",
          "id": 1001,
          "estimatedCostInCents": 618,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "name": "canola oil",
          "id": 4582,
          "estimatedCostInCents": 807,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "name": "cayenne pepper",
          "id": 2031,
          "estimatedCostInCents": 583,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "chicken wings",
          "id": 5100,
          "estimatedCostInCents": 593,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "name": "chili powder",
          "id": 2009,
          "estimatedCostInCents": 499,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "garlic powder",
          "id": 1022020,
          "estimatedCostInCents": 344,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "hot sauce",
          "id": 6168,
          "estimatedCostInCents": 859,
          "quantity": {
            "amount": 8,
            "unit": "cups"
          }
        },
        {
          "name": "mango",
          "id": 9176,
          "estimatedCostInCents": 425,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "name": "onion powder",
          "id": 2026,
          "estimatedCostInCents": 597,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "seasoning salt",
          "id": 1042047,
          "estimatedCostInCents": 334,
          "quantity": {
            "amount": 1.5,
            "unit": "tablespoons"
          }
        },
        {
          "name": "seasoning salt",
          "id": 1042047,
          "estimatedCostInCents": 334,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        }
      ], 
      "instructions": [
        {
          "number": 1,
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined."
        }
      ],
      "tags": [
        "sauce"
      ]
    });

    expect(recipe1).to.be.an.instanceof(Recipe);
    expect(recipe3).to.deep.equal(dirtySteveRecipe);
  });

  it('should be able to search all recipes by type / tag', () => {
    const filteredRecipes = shallowRecipeRepo.filterByKeyword(['sauce']);
    const dirtySteveRecipe = new Recipe({
      "name": "Dirty Steve's Original Wing Sauce",
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "name": "black pepper",
          "id": 1002030,
          "estimatedCostInCents": 441,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "brown sugar",
          "id": 19334,
          "estimatedCostInCents": 559,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "name": "butter",
          "id": 1001,
          "estimatedCostInCents": 618,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "name": "canola oil",
          "id": 4582,
          "estimatedCostInCents": 807,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "name": "cayenne pepper",
          "id": 2031,
          "estimatedCostInCents": 583,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "chicken wings",
          "id": 5100,
          "estimatedCostInCents": 593,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "name": "chili powder",
          "id": 2009,
          "estimatedCostInCents": 499,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "garlic powder",
          "id": 1022020,
          "estimatedCostInCents": 344,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "hot sauce",
          "id": 6168,
          "estimatedCostInCents": 859,
          "quantity": {
            "amount": 8,
            "unit": "cups"
          }
        },
        {
          "name": "mango",
          "id": 9176,
          "estimatedCostInCents": 425,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "name": "onion powder",
          "id": 2026,
          "estimatedCostInCents": 597,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "name": "seasoning salt",
          "id": 1042047,
          "estimatedCostInCents": 334,
          "quantity": {
            "amount": 1.5,
            "unit": "tablespoons"
          }
        },
        {
          "name": "seasoning salt",
          "id": 1042047,
          "estimatedCostInCents": 334,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        }
      ], 
      "instructions": [
        {
          "number": 1,
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined."
        }
      ],
      "tags": [
        "sauce"
      ]
    })

    expect(filteredRecipes).to.deep.equal([dirtySteveRecipe]);
    expect(filteredRecipes[0].name).to.equal
    ("Dirty Steve's Original Wing Sauce");

  });

  it('should be able to search all recipes by a set of tags', () => {
    const filteredRecipes = 
    shallowRecipeRepo.filterByKeyword(['snack', 'lunch']);
    const cookieCupsRecipe = new Recipe({
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "name": "all purpose flour",
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "name": "baking soda",
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "name": "egg",
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "name": "granulated sugar",
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "instant vanilla pudding mix",
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "name": "light brown sugar",
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "salt",
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "name": "sea salt",
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "name": "semisweet chocolate chips",
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "name": "unsalted butter",
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "name": "vanilla extract",
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "number": 1,
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
        },
        {
          "number": 2,
          "instruction": "Add egg and vanilla and mix until combined."
        },
        {
          "number": 3,
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees."
        },
        {
          "number": 4,
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt."
        },
        {
          "number": 5,
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown."
        },
        {
          "number": 6,
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce."
        }
      ],
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    });
    const maplePorkchopsRecipe = new Recipe({
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "name": "apple cider",
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "name": "apples",
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "name": "cornstarch",
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "dijon mustard",
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "garlic",
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "name": "grainy mustard",
          "id": 1012046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "maple syrup",
          "id": 19911,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "name": "Miso Soybean Paste",
          "id": 16112,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "pork chops",
          "id": 10010062,
          "quantity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "name": "salt and pepper",
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "name": "soy sauce",
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "name": "sriracha",
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "number": 1,
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!"
        }
      ],
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    })

    expect(filteredRecipes).to.deep.equal(
      [cookieCupsRecipe, maplePorkchopsRecipe]
    );
  });

  it('should be able to search the collection of recipes by ingredient', () => {
    const filteredRecipes = shallowRecipeRepo.filterByKeyword(['butter']);
    expect(filteredRecipes).to.deep.equal([recipe3]);
  });

});