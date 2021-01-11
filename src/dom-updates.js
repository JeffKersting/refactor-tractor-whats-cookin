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

    // CARD DISPLAY
    displayCards(recipeInfo, shortRecipeName) {
        let instructions = '';
        recipeInfo.instructions.forEach(item => {
            instructions += `<li>${item.instruction}</li><br>`
        })

        const cardHtml = `<div class="recipe-card" id=${recipeInfo.id}>
        <div class="flip-card">
          <div class="card-front">
            <h3 maxlength="40">${shortRecipeName}</h3>
            <div class="card-photo-container">
              <img src=${recipeInfo.image} class="card-photo-preview" id= "img1" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
              <div class="text">
                <div id="img2">Click for Instructions</div>
              </div>
            </div>
            <h4>${recipeInfo.tags[0]}</h4>
            <div class="to-cook-button"><div id="icon">🍽</div><p id="icon-text">Add to cook</p></div>
            <div class="favorite-button"><div id="icon">&#127822;</div><p id="icon-text">Favorite</p></div>
          </div>
          <div class="card-back">
            <div id="exit-recipe">⤸</div>
            <p class="instructions-title">${recipeInfo.name}</p>
            <ol class="instructions">${instructions}</ol>
            <div id="cooked-recipe">&#10003;</div>
          </div>
        </div>
      </div>`
            this.addDisplay("main", "beforeend", cardHtml)
    }, 

    capitalize(words) {
        return words.split(" ").map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
      },

    listTags(allTags) {
        allTags.forEach(tag => {
          const tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
            <label for="${tag}">${this.capitalize(tag)}</label></li>`;
          tagList.insertAdjacentHTML("beforeend", tagHtml);
        });
    }


  }

export default domUpdates;