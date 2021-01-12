/* eslint-disable indent */
import './css/index.scss';
import './images/apple-logo.png';
import './images/search.png';
import './images/seasoning.png';
import './images/cookbook.png';
import './images/pot.png';
import User from './user';
import Recipe from './recipe';
import {getData, postData} from './apis';
import domUpdates from './dom-updates';
import Ingredient from './ingredient';

let users = [];
let recipes = [];
let ingredients = []
let user;

window.addEventListener("load", loadPage);

function addEvent(area, eventType, func) {
  document.querySelector(area).addEventListener(eventType, func)
}

addEvent(".login-btn", "click", login) // line 43
addEvent(".home-btn", "click", showHome) // line 70
addEvent(".search-btn", "click", searchRecipes) // line 80
addEvent("#search", "submit", pressEnterSearch) // line 88
addEvent(".favorited-recipes-btn", "click", displayFavoritedRecipes) // line 90
addEvent(".my-pantry-btn",  "click", displayPantry) // line 98
addEvent(".pantry", "click", pantryClicks) // 
addEvent(".add-ingredient-form", "submit", addIngredientToPantry)
addEvent(".show-pantry-recipes-btn", "click", findCheckedPantryBoxes)
addEvent(".lets-cook-btn", "click", displayToCookRecipes)
addEvent(".filter-btn", "click", findCheckedBoxes)
addEvent("main", "click", mainClicks)

function formValue(area) {
  document.querySelector(area).value
}

function loadPage() {
  getData('users', users)
  getData('recipes', recipes)
  getData('ingredients', ingredients)
}

function login() {
  updateDataToClassInstances()
  const loginInput = document.querySelector('.user-input');
  const userLoggingIn = users.find(user => user.name === loginInput.value)
  user = userLoggingIn
  domUpdates.toggle(['.login', '.page-wrapper'])
  showHome()
  displayTagsSideBar()
}

function updateDataToClassInstances() {
  users = users.map(user => new User(user))
  recipes = recipes.map(recipe => new Recipe(recipe))
  // MAYBE TRY TO MAKE ALL THESE INTO INGREDIENT CLASS INSTANCES?
  // const allRecipeIngredients = recipes.flatMap(recipe => recipe.ingredients())
  // ingredients = ingredients.map(ingredient => new Ingredient(ingredient))
}

function displayTagsSideBar() {
  const allTags = recipes.flatMap(recipe => recipe.tags)
  const uniqueTags = new Set(allTags)
  const sortedUniqueTags = Array.from(uniqueTags).sort()
  domUpdates.listTags(sortedUniqueTags);
}

function showHome() {
  domUpdates.displayCards(recipes)
}

function searchRecipes() {
  const userSearch = formValue('#search-input').toLowerCase()
  const searchResults = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(userSearch);
  });
  domUpdates.displayCards(searchResults)
}

function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

function displayFavoritedRecipes() {
  domUpdates.displayCards(user.favoriteRecipes)
}

function displayToCookRecipes() {
  domUpdates.displayCards(user.recipesToCook)
}

function displayPantry() {
  domUpdates.showUserPantry(user, ingredients)
  domUpdates.toggle(['.pantry'])
}

function pantryClicks(event) {
  let target = event.target
  switch(target.id) {
    case 'exit-pantry':
      displayPantry()
      break;
  }
}

function mainClicks(event) {
  const target = event.target
  const targetRecipe = findTargetRecipe(target)

  switch(target.id) {
    case 'img1':
      target.closest('.recipe-card').classList.add('recipe-card-active')
      break;
    case 'img2':
      target.closest('.recipe-card').classList.add('recipe-card-active')
      break;
    case 'icon-fav' || 'icon-fav-text':
      saveToFavorites(targetRecipe)
      break;
    case 'icon-cook' || 'icon-cook-text':
      addToCookList(targetRecipe)
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

function findTargetRecipe(target) {
  const targetId = target.parentNode.getAttribute('name')
  const targetRecipe = recipes.find(recipe => recipe.id == targetId)
}

function saveToFavorites(targetRecipe) {
   console.log('RECIPES', recipes)
  user.saveRecipe(targetRecipe, 'favoriteRecipes')
  //SAVE RECIPE PROPERTY ISFAVORITED
  showHome()
}

function addToCookList(targetRecipe) {
  user.saveRecipe(targetRecipe, 'recipesToCook')
  //SAVE RECIPE PROPERTY ISTOCOOK
  showHome()
}


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

function addIngredientToPantry(event) {
  event.preventDefault()

  const nameAdded = formValue(".name-ingredient-form")
  const quantityAdded = formValue(".quantity-ingredient-form")

  const match = ingredients.find(ingredient => ingredient.name === nameAdded.toLowerCase()) 

  const matchId = match ? match.id : Date.now()

  console.log(matchID)
  postData(user.id, matchId, quantityAdded)
}