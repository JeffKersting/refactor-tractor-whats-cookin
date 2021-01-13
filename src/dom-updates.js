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
            instructions += `<li>${step.instruction}</li><br>`
        })
        recipe.ingredients.forEach(ingredient => {
            ingredients += `<li>${ingredient.name}: ${ingredient.quantity.amount}${ingredient.quantity.unit}</li><br>`
        })

        const shortName = recipe.name.length > 40
        ? recipe.name.substring(0, 40) + "..."
        : recipe.name

        const favoritedClass = recipe.isFavorited ? "favorited" : ''
        const toCookClass = recipe.isFavorited ? "to-cook" : ''

        const cardHtml = `<div class="recipe-card ${favoritedClass} ${toCookClass}" id=${recipe.id} name=${recipe.id}>
          <div class="flip-card">
            <div class="card-front">
              <h3 maxlength="40">${shortName}</h3>
              <div class="card-photo-container">
                <img src=${recipe.image} class="card-photo-preview" id="img1" alt="${recipe.name} recipe" title="${recipe.name} recipe">
                <div class="text">
                  <div id="img2">Click for Instructions</div>
                </div>
              </div>
              <div class="to-cook-button" name=${recipe.id}>
                  <div id="icon-cook">🍽</div>
                  <p id="icon-cook-text">Add to cook</p>
              </div>
              <div class="favorite-button" name=${recipe.id}>
                  <div id="icon-fav">&#127822;</div>
                  <p id="icon-fav-text">Favorite</p>
              </div>
            </div>
            <div class="card-back">
              <div id="exit-recipe">⤸</div>
              <p class="instructions-title">${recipe.name}</p>
              <ol class="ingredients">${ingredients}</ol>
              <ol class="instructions">${instructions}</ol>
              <ol class="missing"></ol>
              <button class="" type="button" id="compare-recipe">Pantry Check?</button>
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
          <label for="${tag}">${this.capitalize(tag)}</label>
          </li>`;
            this.addDisplay(".tag-list", "beforeend", tagHtml);
        });
    },

    showUserPantry(user, ingredients) {
      const pantryItemArray = Object.keys(user.pantry.pantry)
      pantryItemArray.forEach(pantryItem => {
        console.log(user.pantry.pantry[pantryItem])

        //right now if this is long because we have no names on ingredients
        // if they added it themselves to the database we have no way of retrieving
        // that new ingredient name, just an id which I set to Date.now()
        const ingredientName = ingredients.find(ingredient => ingredient.id == pantryItem)
        ? ingredients.find(ingredient => ingredient.id == pantryItem).name
        : `Item ID: ${user.pantry.pantry[pantryItem].id}`

        const pantryItemHTML = `${user.pantry.pantry[pantryItem].amount} - ${ingredientName}  <br>`
        console.log(document.querySelector('.pantry-list'))
        this.addDisplay('.pantry-ingredients', 'beforeend', pantryItemHTML)
       })
    },

    //NOT WORKING
    showRecipeComparison(missingList) {
      const missingItemHtml = ["<h2>Missing Ingredients from Your Pantry:</h2>"]
      missingList.forEach(item => {
        missingItemHtml.push`<li>
        ${item.amount} - ${item.missing}
        </li>`
      })

      this.displayCards('.missing', 'beforeend', missingItemHtml.join(''))
    }

  }

export default domUpdates;
