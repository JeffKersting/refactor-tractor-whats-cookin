/* eslint-disable indent */
/* eslint-disable max-len */
const domUpdates = {
  // TOGGLE DISPLAYS
  toggleSection(toShow, toHide) {
      [toShow, toHide].forEach(area => 
          document.querySelector(area).classlist.toggle("hidden"))
  },

  toggleMenu() {
      // menuOpen = !menuOpen;
      const menuDropdown = document.querySelector(".drop-menu")
      menuDropDown.classList.toggle("hidden")
  },

  addDisplay(area, where, what) {
    document.querySeletor(area).insertAdjacentHTML(where, what)
},

  displayWelcomeBanner() {
      const firstName = user.name.split(" ")[0];
      const welcomeMsg = `
          <div class="welcome-msg">
              <h1>Welcome ${firstName}!</h1>
          </div>`;
      this.addDisplay(".banner-image", "afterbegin",
      welcomeMsg)
  },

  hideDisplay(area) {
      const documentArea = document.getElementById(area);
      documentArea.style.display = "none";
  },

  recipeDisplay(recipesList) {
      recipesList.forEach(recipe => {
          this.hideDisplay(recipe.id)
      });
  },
  
  capitalize(words) {
      return words.split(" ").map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
  },

  
  displayRecipeCard(recipeInfo, shortRecipeName) {
      let instructions = '';
      recipeInfo.instructions.forEach(item => instructions += `<li>${item.instruction}</li><br>`)

      const cardHtml = `
          <div class="recipe-card" id=${recipeInfo.id}>
          <div class="flip-card">
              <div class="card-front">
              <h3 maxlength="40">${shortRecipeName}</h3>
              <div class="card-photo-container">
                  <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
                  <div class="text">
                  <div>Click for Instructions</div>
                  </div>
              </div>
              <h4>${recipeInfo.tags[0]}</h4>
              <div class="favorite-button">&#127822;</div>
              </div>
              <div class="card-back">
              <p class="instructions-title">${recipeInfo.name}</p>
              <ol class="instructions">${instructions}</ol>
              </div>
          </div>
          </div>
          `
          this.addDisplay("main","beforeend", cardHtml)
  },

  generateIngredients(recipe) {
      return recipe && recipe.ingredients.map(i => {
          return `${capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
      }).join(", ");
  },

  generateRecipeTitle(recipe, ingredients) {
      const recipeTitle = `
          <button id="exit-recipe-btn">X</button>
          <h3 id="recipe-title">${recipe.name}</h3>
          <h4>Ingredients</h4>
          <p>${ingredients}</p>`
      this.addDisplay(".recipe-instructions", "beforeend", recipeTitle);
  },

  addRecipeImage(recipe) {
      document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
  },

  generateInstructions(recipe) {
      let instructionsList = "";
      let instructions = recipe.instructions.map(i => {
          return i.instruction
      });
      instructions.forEach(i => {
          instructionsList += `<li>${i}</li>`
      });
      this.addDisplay(".recipe-instructions", "beforeend", "<h4>Instructions</h4>");
      this.addDisplay(".recipe-instructions","beforeend", `<ol>${instructionsList}</ol>`);
  },

// these use const fullRecipeInfo = document.querySelector(".recipe-instructions");
//WE CAN GET RID OF THESE IF WE"RE FUNDAMENTALLY CHANGING THE DISPLAY OF THE RECIPES TO BE ON THE BACK OF THE CARDS AND GET CREATED AND HIDDEN ON LOGIN
  // openRecipeInfo(event) {
  //     fullRecipeInfo.style.display = "inline";
  //     const recipeId = event.path.find(e => e.id).id;
  //     const recipe = recipeData.find(recipe => recipe.id === Number(recipeId));
  //     this.generateRecipeTitle(recipe, generateIngredients(recipe));
  //     this.addRecipeImage(recipe);
  //     this.generateInstructions(recipe);
  //     this.addDisplay(".recipe-instructions", "beforebegin", "<section id='overlay'></div>");
  // },
  
  // exitRecipe() {
  //     while (fullRecipeInfo.firstChild &&
  //         fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
  //     fullRecipeInfo.style.display = "none";
  //     document.getElementById("overlay").remove();
  // },

  //HERE OR IN SCRIPTS? 
  addToMyRecipes(event) {
      if (event.target.className === "card-apple-icon") {
          const cardId = parseInt(event.target.closest(".recipe-card").id)
          if (!user.favoriteRecipes.includes(cardId)) {
              event.target.src = "../images/apple-logo.png";
              user.saveRecipe(cardId);
          } else {
              event.target.src = "../images/apple-logo-outline.png";
              user.removeRecipe(cardId);
          }
      } else if (event.target.id === "exit-recipe-btn") {
          this.exitRecipe();
      } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
          openRecipeInfo(event);
      }
  },
  
  isDescendant(parent, child) {
      let node = child;
      while (node !== null) {
          if (node === parent) {
              return true;
          }
      node = node.parentNode;
      }
      return false;
  },

// FILTER BY RECIPE TAGS
  listTags(allTags) {
      allTags.forEach(tag => {
          const tagHtml = 
              `<li>
              <input type="checkbox" class="checked-tag" id="${tag}">
              <label for="${tag}">${capitalize(tag)}</label>
              </li>`;
          this.addDisplay(".tag-list", "beforeend", tagHtml);
      });
  },

  findTags() {
      let tags = [];
      recipes.forEach(recipe => {
          recipe.tags.forEach(tag => {
              if (!tags.includes(tag)) {
                  tags.push(tag);
              }
          });
      });
      tags.sort();
      this.listTags(tags);
  },

  findTaggedRecipes(selected) {
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
      this.showAllRecipes();
      if (filteredResults.length > 0) {
          filterRecipes(filteredResults);
      }
  },

  filterRecipes(filtered) {
      const foundRecipes = recipes.filter(recipe => {
          return !filtered.includes(recipe);
      });
      this.recipeDisplay(foundRecipes)
  },

// SEARCH RECIPES
//helper for searchRecipes uses global recipes var
  createRecipeObject(recipes) {
      recipes = recipes.map(recipe => new Recipe(recipe));
  },

  searchRecipes() {
      showAllRecipes();
      const searchedRecipes = recipeData.filter(recipe => {
          return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
      });
      this.filterNonSearched(createRecipeObject(searchedRecipes));
  },

  filterNonSearched(filtered) {
      const found = recipes.filter(recipe => {
          const ids = filtered.map(f => f.id);
          return !ids.includes(recipe.id)
      })
      this.recipeDisplay(found);
  },

  showRecipes(recipesList) {
      recipesList.forEach(recipe => {
          const domRecipe = document.getElementById(`${recipe.id}`);
          domRecipe.style.display = "block";
      });
  },

// CREATE AND USE PANTRY
displayPantryInfo(pantry) {
  pantry.forEach(ingredient => {
      const ingredientHtml = 
          `<li>
          <input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
          <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label>
          </li>`;
      this.addDisplay(".pantry-list", "beforeend",
      ingredientHtml);
  });
}



};

// export default domUpdates;
