import './css/base.scss';
import './css/styles.scss';
import {getData, postData} from './apis'
import domUpdates from './dom-updates';
import User from './user';
import Recipe from './recipe';

const fullRecipeInfo = document.querySelector(".recipe-instructions");

let pantryInfo = [];
let recipes = [];
const user; 
const recipeData = getData('recipes')
const usersdata = getData('users')
const ingredientData = getData('ingredients')

const loginInput = document.querySelector('.user-input');
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");

window.addEventListener("load", loadPage);
searchForm.addEventListener("submit", pressEnterSearch);

const addClickEvent = (buttonName, func) => {
  document.querySelector(buttonName).addEventListener("click", func)
}

addClickEvent('.login-btn', returnUserId)
addClickEvent(".show-all-btn", showAllRecipes)
addClickEvent(".filter-btn", findCheckedBoxes)
addClickEvent("main", addToMyRecipes)
addClickEvent(".my-pantry-btn", domUpdates.toggleMenu)
addClickEvent(".saved-recipes-btn", domUpdates.showSavedRecipes)
addClickEvent(".search-btn", domUpdates.searchRecipes)
addClickEvent(".search-btn", domUpdates.searchRecipes)
addClickEvent(".show-pantry-recipes-btn", findCheckedPantryBoxes)

const loadPage = () => {
    createCards()
    findTags()
    findPantryInfo()
    domUpdates.displayWelcomeBanner()
}

const returnUserId = () => {
    const userSearched = users.find(user => user.name === loginInput.value)
    user = new User(userSearched)
  }

const pressEnterSearch = (event) => {
    event.preventDefault();
    domUpdates.searchRecipes();
}


