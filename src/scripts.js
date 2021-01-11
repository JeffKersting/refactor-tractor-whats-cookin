// import users from './data/users-data';
// import recipeData from  './data/recipe-data';
// import ingredientData from './data/ingredient-data';

// // // // // // IMPORT CSS
import './css/index.scss';
import './images/apple-logo.png';
import './images/search.png';
import './images/seasoning.png';
import './images/cookbook.png';
import './images/pot.png';

// // // // // // IMPORT CLASS AND FUNCTIONS
import User from './user';
import Recipe from './recipe';
import Pantry from './pantry';
import Ingredient from './ingredient';
import {getData, postData} from './apis';
import domUpdates from './dom-updates';

// // // // // // GLOBAL VARIABLES
const fullRecipeInfo = document.querySelector(".recipe-instructions");

let menuOpen = false;
let users = [];
let recipes = [];
let ingredients = []
let pantryInfo = [];
let user;

// HELPER FUNCTION TO ADD EVENT LISTENERS ON CLICKS
function addClickEvent(area, func) {
  document.querySelector(area).addEventListener('click', func)
}

// // // // // // LOADING THE PAGE 
window.addEventListener("load", loadPage);

function loadPage() {
  getData('users', users)
  getData('recipes', recipes)
  getData('ingredients', ingredients)
}

// // // // // // LOGGIN IN 
addClickEvent(".login-btn", login)

function login() {
  const loginInput = document.querySelector('.user-input');
  const userLoggingIn = users.find(user => user.name === loginInput.value)
  user = new User(userLoggingIn)
  domUpdates.toggle(['.login', '.page-wrapper'])
  createCards(recipes)
  findTags()
}

// CREATE RECIPE CARDS
function createCards(recipeList) {
  recipeList.forEach(recipe => {
    const recipeInfo = new Recipe(recipe);
    let shortRecipeName = recipeInfo.name;
    recipesList.push(recipeInfo);
    if (recipeInfo.name.length > 40) {
      shortRecipeName = recipeInfo.name.substring(0, 40) + "...";
    }
    domUpdates.displayCards(recipeInfo, shortRecipeName)
  });
}

function findTags() {
  let tags = [];
  recipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  tags.sort();
  domUpdates.listTags(tags);
}

// // // // // // SHOW ALL RECIPES BUTTON 
addClickEvent(".show-all-btn", showAllRecipes)

//BOTH OF THESE TOGGLE?
function toggleMenu() {
  domUpdates.toggle('.drop-menu')
  // REPLACE ALL THIS WITH THE ABOVE TOGGLE?
  // var menuDropdown = document.querySelector(".drop-menu");
  // // menuOpen = !menuOpen;
  // if (menuOpen) {
  //   menuDropdown.style.display = "block";
  // } else {
  //   menuDropdown.style.display = "none";
  // }
}

function showAllRecipes() {
  //TOGGLE? HERE
  // let ids = recipes.
  recipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "block";
  });
  domUpdates.toggle([".welcome-msg", ".my-recipes-banner"])
}



// // // // // // FAVORITING THE RECIPES 
addClickEvent("main", mainClicks)

function mainClicks(event) {
  let target = event.target
  console.log(target.id)
  switch(target.id) {
    case 'img1':
      target.parentNode.parentNode.parentNode.parentNode.classList.add('recipe-card-active')
      break;
    case 'img2':
      target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('recipe-card-active')
      break;
    case 'icon-fav' || 'icon-fav-text':
      console.log(target.parentNode.parentNode.parentNode.parentNode.classList)
      break;
    case 'icon-cook' || 'icon-cook-text':
      addToCookList(target.parentNode.name)
      break;
    case 'exit-recipe':
      target.parentNode.parentNode.parentNode.classList.remove('recipe-card-active')
      break;
    case 'cooked-recipe':
      console.log('cooked-recipe')
      break;
    case 'exit-pantry':
      target.parentNode.classList.add('hidden')
      break;
  }
}

function addToCookList(targetId) {
   //to add this to the "let's cook list" we need to
      // find recipe in recipes  
  const targetRecipe = recipes.find(recipe => recipe.id === targetId)
  user.recipesToCook.push(targetRecipe)
  console.log('TARGET RECIPE', targetRecipe)
  //DO WE UPDATE THE DATABASE WITH API?
  // Change the icon color
  // display the new recipes to cook in the list
 
}



function addToFavoriteRecipes() {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.saveRecipe(cardId);
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe(cardId);
    }
  } 

function showSavedRecipes() {
  let unsavedRecipes = recipes.filter(recipe => {
    return !user.favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
  domUpdates.toggle([".welcome-msg", ".my-recipes-banner"])
}

function clickSaveToFavoriteRecipes(event) {
  // console.log(event.target.classList.contains(''))
  if (event.target.classList.contains('favorite-button')) {
    event.target.classList.add('favorited-button')
  }
}


// // // // // // DISPLAY LET'S COOK RECIPES TO COOK BUTTON
addClickEvent('.lets-cook-button', displayRecipesToCook)

function displayRecipesToCook() {
  createCards(user.recipesToCook)
}

// // // // // // DISPLAYING FAVORITED RECIPES
addClickEvent(".saved-recipes-btn", showSavedRecipes)


// // // // // // SEARCH BAR 
addClickEvent(".search-btn", searchRecipes)
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
searchForm.addEventListener("submit", pressEnterSearch);


function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

function searchRecipes() {
  showAllRecipes();
  let searchedRecipes = recipeData.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  filterNonSearched(createRecipeObject(searchedRecipes));
}

function filterNonSearched(filtered) {
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function createRecipeObject(recipes) {
  recipes = recipes.map(recipe => new Recipe(recipe));
  return recipes
}

// // // // // // FILTER BY RECIPE TAGS
// // // // // // TAG SEARCH
addClickEvent(".filter-btn", findCheckedBoxes)
const tagList = document.querySelector(".tag-list");


function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
}

// // // // // // PANTRY 
  addClickEvent(".show-pantry-recipes-btn", findCheckedPantryBoxes)
  addClickEvent(".my-pantry-btn",  displayPantry)
  addClickEvent('.pantry', pantryClicks)

function displayPantry() {
  domUpdates.toggle(['.pantry'])
}

function pantryClicks(event) {
  let target = event.target
  console.log(target.parentNode)
  switch(target.id) {
    case 'exit-pantry':
      displayPantry()
      break;
  }
}

// CREATE AND USE PANTRY
function findPantryInfo() {
  user.pantry.forEach(item => {
    let itemInfo = ingredientsData.find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = pantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.count += item.amount;
    } else if (itemInfo) {
      pantryInfo.push({name: itemInfo.name, count: item.amount});
    }
  });
  displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
}

function displayPantryInfo(pantry) {
  pantry.forEach(ingredient => {
    let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
      <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
    document.querySelector(".pantry-list").insertAdjacentHTML("beforeend",
      ingredientHtml);
  });
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

function findRecipesWithCheckedIngredients(selected) {
  const recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  const ingredientNames = selected.map(item => item.id)

  recipes.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });

    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}
}

// // ADD INGREDIENT FORM
 // do we need a form here to post ingredients 
  // so users can update their pantry?

// addClickEvent(".add-ingredient-button", addIngredientToPantry)
// const nameAddedIngredient = document.querySelector(".name-ingredient-form")
// const quantityAddedIngredient = document.querySelector(".quantity-ingredient-form")

// const addIngredientToForm  = () => {
//   const nameAdded = nameAddedIngredient.value
//   const quantityAdded = quantityAddedIngredient.value

// // IF EITHER FIELD IS EMPTY
//   const checkEmptyField = field => field === '' || field === null
//   if (checkEmptyField(nameAdded) || checkEmptyField(quantityAdded)) {
//     alert('Name and Quantity input is required.')
//   }
// // VALIDATE TYPE OF FORM INPUT
//    const formInputValidation = nameAddedIngredient === /^[a-zA-Z]+$/
//      &&  quantityAdded === /^[0-9]+$/

// //CHECK IF THERE'S A MATCHING INGREDIENT ID
//   const match = ingredients.find(ingredient => ingredient.name === nameInput)

// // IF VALID ADD TO USER PANTRY AND POST 
//    if (formInputValidation && match) {
//      user.pantry[match.id].quantity.amount += quantityAdded
//      postData(user.id, match.id, quantityAdded)
//   } else {

// // CAN WE ONLY ADD EXISTING INGREDIENTS? HOW DO WE ADD NEW INGREDIENT WITH POST TO DATABASE?
//     alert('Sorry, ingredient cannot be added at this time.')
//   }
// }