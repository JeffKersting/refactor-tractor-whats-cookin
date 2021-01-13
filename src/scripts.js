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
let ingredients = [];
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
addEvent(".find-recipes-using-pantry-btn", "click", findRecipesUsingPantry)
addEvent(".lets-cook-btn", "click", displayToCookRecipes)
addEvent(".filter-btn", "click", displayTaggedRecipes)
addEvent("main", "click", mainClicks)
addEvent('.filter', 'click', showFilterMenu)

const filterBar = document.querySelector('.recipe-filters')
function showFilterMenu() {
  filterBar.classList.toggle('filter-drop')
  filterBar.classList.toggle('recipe-filters')
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
  // doing this just to keep all data in class structures? dunno if needed
  users = users.map(user => new User(user))
  recipes = recipes.map(recipe => new Recipe(recipe, ingredients))
  // MAYBE TRY TO MAKE ALL THESE INTO INGREDIENT CLASS INSTANCES?
  // tricky because we have to pass in another array to instantiate
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
  alert(`You have added ${quantityAdded} of ${nameAdded} to your pantry!`)

  //Update user from API to update ingredients,
  //right now it's doing a weird concatination instead of addition,
  // added a parseInt to pantry amount to try to fix in the future
  // getData('users', users)
  // user = users.find(person => person.id === user.id)
  // showUserPantry(user, ingredients)
}

// we currently don't have this but we could?
function findRecipesUsingPantry() {
  const recipesUserCouldCook = recipes.filter(recipe => {
    return !user.pantry.compareIngredients(recipe)
  })
  if (recipesUserCouldCook.length != 0) {
    domUpdates.displayCards(recipesUserCouldCook)
    domUpdates.toggle(['.pantry'])
  } else {
    alert('Sorry, you need to go to the groccery store.')
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
      target.classList.toggle('favorited')
      console.log(target.classList)
      break;
    case 'icon-cook' || 'icon-cook-text':
      addToCookList(targetRecipe)
      target.classList.toggle('to-cook')
      break;
    case 'exit-recipe':
      target.closest('.recipe-card').classList.remove('recipe-card-active')
      break;
    case 'cooked-recipe':
      cookThisRecipe(targetRecipe)
      break;
    case 'exit-pantry':
      target.parentNode.classList.add('hidden')
      break;
    case `compare-recipe`:
      console.log(target.classList)
      //may have to do something to set button eventListening or something
      compareRecipes(targetRecipe)
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
  showHome()
}

function addToCookList(targetRecipe) {
  targetRecipe.isToCook = true
  user.saveRecipe(targetRecipe, 'recipesToCook')
  showHome()
}

//NOT WORKING:
function compareRecipes(targetRecipe) {
  console.log(targetRecipe)
  const missingList = user.pantry.compareIngredients(targetRecipe)
  console.log(missingList)
  if (missingList) {
    domUpdates.showRecipeComparison(missingList)
  } else {
    alert('YOU CAN DO IT')
  }
}

function cookThisRecipe(targetRecipe) {
  user.removeRecipe(targetRecipe, 'recipesToCook')
  user.pantry.removeIngredients(targetRecipe)
  domUpdates.showUserPantry(user, ingredients)
  alert('Good cooking! Recipe will be removed from your recipes to cook.')
  setTimeout(showHome, 1000)
}

function displayTaggedRecipes(checkboxesSelector) {
  const checkboxes = document.querySelectorAll(".checked-tag");
  const checkboxValues = Array.from(checkboxes)
  const selectedBoxes = checkboxValues.filter(box => box.checked).map(tag => tag.id)
  const searchResults = recipes.filter(recipe => {
    return recipe.tags.some(tag => selectedBoxes.includes(tag));
  });
  domUpdates.displayCards(searchResults)
  //how to reset checks? when?
}
