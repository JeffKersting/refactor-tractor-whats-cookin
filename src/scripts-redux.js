/* eslint-disable max-len */
//IMPORT CSS
import './css/index.scss';
import './images/apple-logo.png'
import './images/search.png'
import './images/seasoning.png'
import './images/cookbook.png'
import './images/pot.png'
//IMPORT CLASSES 
import {getData, postData} from './apis'
import domUpdates from './dom-updates';
import User from './user';
import Recipe from './recipe';

window.addEventListener("load", loadPage);

const loginInput = document.querySelector('.user-input');

function addClickEvent(area, func) {
  document.querySelector(area).addEventListener('click', func)
}

addClickEvent(".login-btn", login)
// addClickEvent(".show-all-btn", showAllRecipes)
// addClickEvent(".filter-btn", findCheckedBoxes)
// addClickEvent("main", addToMyRecipes)
addClickEvent(".my-pantry-btn", displayMenu)
addClickEvent(".saved-recipes-btn", domUpdates.showSavedRecipes)
addClickEvent(".search-btn", domUpdates.searchRecipes)
// addClickEvent(".show-pantry-recipes-btn", findCheckedPantryBoxes)

// search
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");

// search bar button
searchForm.addEventListener("submit", pressEnterSearch);

function pressEnterSearch(event) {
  event.preventDefault();
  domUpdates.searchRecipes();
}

// load
  // login page html displays >>>>>> 
  // get user data to use for login button search >>>>>> 
  // get all recipes data? >>>>>> 
  // get all ingredients data? >>>>>> 

let users = [];
let recipes = [];
let ingredients = [];

function loadPage() {
  getData('users', users)
  getData('recipes', recipes)
  getData('ingredients', ingredients)
}

// on login display
  // create user & display welcome  >>>>>> 
  // create & hide display pantry >>>>>> 
  // create & hide display favs  >>>>>> 
  // create & hide display to cook >>>>>> 


let user;

function returnUserId() {
  const userSearched = users.find(user => user.name === loginInput.value)
  user = new User(userSearched)
}
function createCards() {
  recipes.forEach(recipe => {
      const recipeInstance = new Recipe(recipe);
      recipes.push(recipeInstance);
      const shortRecipeName = recipeInstance.name;
      if (recipeInstance.name.length > 40) {
          shortRecipeName = recipeInstance.name.substring(0, 40) + "...";
      }
      domUpdates.displayRecipeCard(recipeInstance, shortRecipeName)
  });
}

function login() {
  returnUserId()
  createCards()
  domUpdates.showRecipes(recipes)
  domUpdates.listTags()
  domUpdates.displayWelcomeBanner()
  // MAKE SURE THESE DEFAULT TO HIDDEN CLASS
  domUpdates.displayPantryInfo(user.pantry.sort((a, b) => a.name.localeCompare(b.name)))
  //
}

//FIGURE OUT WHAT TO TOGGLE?
//showWelcomeBanner & showMyRecipesBanner
// domUpdates.toggleSelection(".welcome-msg", ".my-recipes-banner")

//toggleMenu
function displayMenu() {
  domUpdates.toggleMenu()
}

function showSavedRecipes() {
  const unsavedRecipes = recipes.filter(recipe => {
      return !user.favoriteRecipes.includes(recipe.id);
  });
  domUpdates.recipeDisplay(unsavedRecipes)
  domUpdates.toggleSelection(".welcome-msg", ".my-recipes-banner")
}


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
  // function that updates the pantry locally and does the fetch post



//     if (selectedIngredients.length > 0) {
//         this.findRecipesWithCheckedIngredients(selectedIngredients);
//     }


function findCheckedBoxes(checkboxesSelector) {
  const checkboxes = document.querySelectorAll(checkboxesSelector);
  const checkboxValues = Array.from(checkboxes)
  const selectedBoxes = checkboxValues.filter(box => box.checked)
  findRecipes(selectedBoxes);
}

function searchAndDisplayRecipesMatchingTagCheckboxes() {
  findCheckedBoxes(".checked-tag")
}


function searchAndDisplayRecipesForPantryIngredients() {
  findCheckedBoxes(".pantry-checkbox")
  this.showAllRecipes();
}


function findRecipesWithCheckedIngredients(selected) {
  const recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  const ingredientNames = selected.map(item => {
      return item.id;
  })
  recipes.forEach(recipe => {
      let allRecipeIngredients = [];
      recipe.ingredients.forEach(ingredient => {
          allRecipeIngredients.push(ingredient.name);
      });
      if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
          const domRecipe = document.getElementById(`${recipe.id}`);
          domRecipe.style.display = "none";
      }
  })
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