/* eslint-disable indent */
import './css/index.scss';
import './images/apple-logo.png';
import './images/search.png';
import './images/seasoning.png';
import './images/cookbook.png';
import './images/pot.png';
import User from './user';
import Recipe from './recipe';
// import Pantry from './pantry';
// import Ingredient from './ingredient';
import {getData, postData} from './apis';
import domUpdates from './dom-updates';

let users = [];
let recipes = [];
let ingredients = []
let user;

window.addEventListener("load", loadPage);

function addClickEvent(area, func) {
  document.querySelector(area).addEventListener('click', func)
}

addClickEvent(".login-btn", login)
addClickEvent("main", mainClicks)
// addClickEvent('.lets-cook-button', displayRecipesToCook)
addClickEvent(".saved-recipes-btn", showSavedRecipes)
addClickEvent(".search-btn", searchRecipes)
// addClickEvent(".home", showAllRecipes)
addClickEvent(".filter-btn", findCheckedBoxes)
addClickEvent(".show-pantry-recipes-btn", findCheckedPantryBoxes)
addClickEvent(".my-pantry-btn",  displayPantry)
addClickEvent('.pantry', pantryClicks)
// addClickEvent(".add-ingredient-button", addIngredientToPantry)


// LOADING THE PAGE 
function loadPage() {
  getData('users', users)
  getData('recipes', recipes)
  getData('ingredients', ingredients)
}

// LOGGING IN 
function login() {
  const loginInput = document.querySelector('.user-input');
  const userLoggingIn = users.find(user => user.name === loginInput.value)
  user = new User(userLoggingIn)
  domUpdates.toggle(['.login', '.page-wrapper'])
  createCards(recipes)
  findTags()
}

function createCards() {
  recipes = recipes.map(recipe => new Recipe(recipe))
  recipes.forEach(recipe => domUpdates.displayCards(recipe))
};

function findTags() {
  const allTags = recipes.flatMap(recipe => recipe.tags)
  const uniqueTags = new Set(allTags)
  const sortedUniqueTags = Array.from(uniqueTags).sort()
  domUpdates.listTags(sortedUniqueTags);
}

// SHOW ALL RECIPES BUTTON 
//This will become the "Home" logo click, shows all recipes


// function showAllRecipes() {
//  displayCards(recipes)
// }
console.log('HELLO SCOTT')


// // // // // // FAVORITING THE RECIPES 


function mainClicks(event) {
  let target = event.target
  // console.log(target.id)
  switch(target.id) {
    case 'img1':
      target.closest('.recipe-card').classList.add('recipe-card-active')
      break;
    case 'img2':
      target.closest('.recipe-card').classList.add('recipe-card-active')
      break;
    case 'icon-fav' || 'icon-fav-text':
      console.log(target.parentNode.parentNode.parentNode.parentNode.classList)
      break;
    case 'icon-cook' || 'icon-cook-text':
      addToCookList(target)
      break;
    case 'exit-recipe':
      target.closest('.recipe-card').classList.remove('recipe-card-active')
      break;
    case 'cooked-recipe':
      console.log('cooked-recipe')
      break;
    case 'exit-pantry':
      target.parentNode.classList.add('hidden')
      break;
  }
}

function addToCookList(target) {
   //to add this to the "let's cook list" we need to
      // find recipe in recipes 
  const targetId = target.parentNode.getAttribute('name')
  const targetRecipe = recipes.find(recipe => recipe.id == targetId)
  user.recipesToCook.push(targetRecipe)
 
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

function displayRecipesToCook() {
  createCards(user.recipesToCook)
}

// // // // // // DISPLAYING FAVORITED RECIPES


// // // // // // SEARCH BAR 

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


// ADD INGREDIENT FORM
document.querySelector(".add-ingredient-form").addEventListener("submit", addIngredientToPantry)

const nameAddedIngredient = document.querySelector(".name-ingredient-form")
const quantityAddedIngredient = document.querySelector(".quantity-ingredient-form")

function addIngredientToPantry(event) {
  event.preventDefault()

  const nameAdded = nameAddedIngredient.value
  const quantityAdded = quantityAddedIngredient.value

  const match = ingredients.find(ingredient => ingredient.name === nameAdded.toLowerCase()) 

  const matchId = match ? match.id : Date.now()

  console.log(matchID)
  postData(user.id, matchId, quantityAdded)
}