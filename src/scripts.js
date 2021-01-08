import './css/base.scss';
import './css/styles.scss';
import {getData, postData} from './apis'
import domUpdates from './dom-updates';
import User from './user';
import Recipe from './recipe';

const fullRecipeInfo = document.querySelector(".recipe-instructions");

let pantryInfo = [];
let recipes = [];
let users = []
let ingredients = []
let user; 

const addClickEvent = (buttonName, func) => {
  document.querySelector(buttonName).addEventListener("click", func)
}

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

const loadPage = () => {
  getData('recipes', recipes)
  getData('users', users)
  getData('ingredients', ingredients)
  console.log('hi')
}

const returnUserId = () => {
  const userSearched = users.find(user => user.name === loginInput.value)
  user = new User(userSearched)
}

const login = () => {
  console.log('login')
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