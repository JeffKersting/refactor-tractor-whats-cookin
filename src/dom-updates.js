const domUpdates = {
  // CHANGE THE DISPLAY OF ANY ARGS PASSED IN, MUST PASS IN [ARGS]
  toggle(anyArr) {
    anyArr.forEach(area =>
      document.querySelector(area).classList.toggle("hidden"))
  },

  // HELPER FUNCTION TO INSERTHTML
  addDisplay(area, where, what) {
    document.querySelector(area).insertAdjacentHTML(where, what)
  },

  clearDisplay(area) {
    document.querySelector(area).innerHTML = ''
  },

  // CARD DISPLAY
  displayCards(recipeList) {
    this.clearDisplay('main')

    recipeList.forEach(recipe => {
      let instructions = '';
      let ingredients = '';
      recipe.instructions.forEach(step => {
        instructions += `<li aria-label="recipe-instruction-step" tabindex="0">${step.instruction}</li><br>`
      })
      recipe.ingredients.forEach(ingredient => {
        ingredients += `<li aria-label="ingredient-required-for-recipe" tabindex="0">${ingredient.name}: ${ingredient.quantity.amount}${ingredient.quantity.unit}</li><br>`
      })

      const shortName = recipe.name.length > 40
        ? recipe.name.substring(0, 40) + "..."
        : recipe.name

      const favoritedClass = recipe.isFavorited ? "favorited" : ''
      const toCookClass = recipe.isToCook ? "to-cook" : ''

      const cardHtml = `<div class="recipe-card" id=${recipe.id} name=${recipe.id}>
          <div class="flip-card">
            <div class="card-front">
              <h3 maxlength="40">${shortName}</h3>
              <div class="card-photo-container">
                <img src=${recipe.image} class="card-photo-preview" id="img1" alt="${recipe.name} recipe" title="${recipe.name} recipe" aria-label="flip-card-to-reveal-details-for-${recipe.name}" tabindex="0" role="button">
                <div class="text">
                  <div id="img2">Click for Instructions</div>
                </div>
              </div>
            <div class="to-cook-button" name=${recipe.id}>
                <div class="${toCookClass}" id="icon-cook" aria-label="button-to-add-recipe-to-user-list-to-cook" tabindex="0" role="button">🍽</div>
                <p id="icon-cook-text">Add to cook</p>
            </div>
            <div class="favorite-button" name=${recipe.id}>
                <div class="${favoritedClass}" id="icon-fav" aria-label="button-to-add-recipe-to-user-list-of-favorites" tabindex="0" role="button">&#127822;</div>
                <p id="icon-fav-text">Favorite</p>
            </div>
          </div>
            <div class="card-back">
              <div id="exit-recipe" aria-label="button-to-exit-details-view-of-${recipe.name}" tabindex="0" role="button">⤸</div>
              <p class="instructions-title">${recipe.name}</p>
              <ol class="ingredients missing-${recipe.id}" aria-label="ingredients-user-must-restock-to-cook-${recipe.name}" tabindex="0">
              <h2>Ingredients:</h2>
              ${ingredients}
              <h2>Total Cost of Ingredients:</h2>
              <p>${recipe.calculateIngredientsCost()}</p>
              </ol>
              <ol class="instructions">
                <h2>Instructions:</h2>
                ${instructions}
              </ol>
              <button class="compare-recipe-button" type="button" id="compare-recipe" aria-label="button-to-check-user-pantry-stock-of-ingredients-to-cook-${recipe.name}" tabindex="0">Check Pantry?</button>
              <div id="cooked-recipe">&#10003;</div>
            </div>
          </div>
        </div>`
      this.addDisplay("main", "beforeend", cardHtml)
    })
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  listTags(allTags) {
    allTags.forEach(tag => {
      const tagHtml = `<li>
        <input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}" aria-label="checkbox-for-${tag}-tag" aria-required="false" tabindex="0">${this.capitalize(tag)}</label>
        </li>`;
      this.addDisplay(".tag-list", "beforeend", tagHtml);
    });
  },

  showUserPantry(user, ingredients) {
    const pantryItemArray = Object.keys(user.pantry.pantry)
    pantryItemArray.forEach(pantryItem => {   
        const ingredientName = ingredients.find(ingredient => ingredient.id == pantryItem)
        ? ingredients.find(ingredient => ingredient.id == pantryItem).name
        : `Item ID: ${user.pantry.pantry[pantryItem].id}`
      const pantryItemHTML = `${user.pantry.pantry[pantryItem].amount} - ${ingredientName}  <br>`
      this.addDisplay('.pantry-ingredients', 'beforeend', pantryItemHTML)
    })
  },

  showRecipeComparison(missingList, targetRecipe) {
    const missingItemHtml = ["<h2>Missing Ingredients from Your Pantry:</h2>"]
    missingList.forEach(item => {
      missingItemHtml.push(`<li aria-label="ingredient-to-restock"  tabindex="0">
        ${item.amountNeeded} - ${item.missing}
        </li>`)
    })
    this.addDisplay(`.missing-${targetRecipe.id}`, 'afterbegin', missingItemHtml.join(''))
  }

}

export default domUpdates;
