/* eslint-disable max-len */
import './css/index.scss';
import {getData, postData} from './apis'
import domUpdates from './dom-updates';

import users from './data/users-data';
import recipeData from  './data/recipe-data';
import ingredientData from './data/ingredient-data';

import './css/index.scss';
import './images/apple-logo.png'
import './images/search.png'
import './images/seasoning.png'
import './images/cookbook.png'
import './images/pot.png'

import User from './user';
import Recipe from './recipe';

const fullRecipeInfo = document.querySelector(".recipe-instructions");

let pantryInfo = [];
let recipes = [];
let ingredients = [];

window.addEventListener("load", loadPage);

const loginInput = document.querySelector('.user-input');
addClickEvent(".login-btn", login)
addClickEvent(".show-all-btn", showAllRecipes)
addClickEvent(".filter-btn", findCheckedBoxes)
addClickEvent("main", addToMyRecipes)
addClickEvent(".my-pantry-btn", displayMenu)
addClickEvent(".saved-recipes-btn", domUpdates.showSavedRecipes)
addClickEvent(".search-btn", domUpdates.searchRecipes)
addClickEvent(".show-pantry-recipes-btn", findCheckedPantryBoxes)

// search
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
searchForm.addEventListener("submit", pressEnterSearch);

// // ADD INGREDIENT FORM
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

// load
  // login page html displays
  // get user data to use for login button search
  // get all recipes data?
  // get all ingredients data?

const loadPage = () => {
  getData('users', users)
  getData('recipes', recipes)
  getData('ingredients', ingredients)
  console.log('hi')
}

// on login display
  // create user & display welcome
  // create & hide display pantry
  // create & hide display favs 
  // create & hide display to cook

const returnUserId = () => {
  const userSearched = users.find(user => user.name === loginInput.value)
  user = new User(userSearched)
}

const login = () => {
  returnUserId()
  createCards()
  findTags()
  findPantryInfo()
  domUpdates.displayWelcomeBanner()
}
const pressEnterSearch = (event) => {
  event.preventDefault();
  domUpdates.searchRecipes();
}

//showWelcomeBanner & showMyRecipesBanner
domUpdates.toggleSelection(".welcome-msg", ".my-recipes-banner")

//toggleMenu
const displayMenu = () => {
  domUpdates.toggleMenu()
}

const showSavedRecipes = () => {
  const unsavedRecipes = recipes.filter(recipe => {
      return !user.favoriteRecipes.includes(recipe.id);
  });
  domUpdates.recipeDisplay(unsavedRecipes)
  domUpdates.toggleSelection(".welcome-msg", ".my-recipes-banner")
}
//PLANNING



// search bar button
// checkbox search button
  // const displayFilteredRecipes = () => {
  //   let search = whateverItIsThatWasSearched
  //   recipes.methodThatFilters
  //   domUpdates.displayRecipes()
  // }

// user favorites button
  // displayFilteredRecipes by 'favorites'?
  // dropdown or what display?

// user to cook button
  // displayFilteredRecipes by 'toCook'?

// user 'cook this' button
  // method that updates local and posts pantry ingredient changes

//user pantry button
  // displays ingredients in user pantry
  // do we need a form here to post ingredients 
  // so users can update their pantry?

//function that updates the pantry locally and does the fetch post