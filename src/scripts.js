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

  const userSearch = document.querySelector('#search-input').value.toLowerCase()
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
  console.log(user.favoriteRecipes)
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

function addIngredientToPantry(event) {
  event.preventDefault()
  const nameAdded = document.querySelector(".name-ingredient-form").value
  const quantityAdded = document.querySelector(".quantity-ingredient-form").value

  const match = ingredients.find(ingredient => ingredient.name === nameAdded.toLowerCase()) 
  const matchId = match ? match.id : Date.now()

  postData(user.id, matchId, quantityAdded)
}

function mainClicks(event) {
  console.log('HELP', event.target, 'PARENT', event.target.closest('.recipe-card').getAttribute("name"))
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
  const targetId = target.closest('.recipe-card').getAttribute('name')
  return recipes.find(recipe => recipe.id == targetId)
}

function saveToFavorites(targetRecipe) {
  targetRecipe.isFavorited = true
  user.saveRecipe(targetRecipe, 'favoriteRecipes')
  console.log(user.favoriteRecipes)
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

function findCheckedPantryBoxes() {
  console.log('hi')
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