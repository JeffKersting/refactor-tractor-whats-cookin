/* eslint-disable max-len */
const domUpdates = {
    toggleMenu() {
        const menuDropdown = document.querySelector(".drop-menu");
        menuOpen = !menuOpen;
        if (menuOpen) {
            menuDropdown.style.display = "block";
        } else {
            menuDropdown.style.display = "none";
        }
    },

    showSavedRecipes() {
        const unsavedRecipes = recipes.filter(recipe => {
            return !user.favoriteRecipes.includes(recipe.id);
        });
        unsavedRecipes.forEach(recipe => {
            const domRecipe = document.getElementById(`${recipe.id}`);
            domRecipe.style.display = "none";
        });
        showMyRecipesBanner();
    },

    displayWelcomeBanner() {
        const firstName = user.name.split(" ")[0];
        const welcomeMsg = `
            <div class="welcome-msg">
                <h1>Welcome ${firstName}!</h1>
            </div>`;
        document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
            welcomeMsg);
    },
    
    displayRecipeCard(recipeInfo, shortRecipeName) {
        const cardHtml = 
            `<div class="recipe-card" id=${recipeInfo.id}>
                <h3 maxlength="40">${shortRecipeName}</h3>
                <div class="card-photo-container">
                    <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
                    <div class="text">
                        <div>Click for Instructions</div>
                    </div>
                </div>
                <h4>${recipeInfo.tags[0]}</h4>
                    <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
            </div>`;
            document.querySelector("main").insertAdjacentHTML("beforeend", cardHtml);
    },

    listTags(allTags) {
        allTags.forEach(tag => {
            let tagHtml = 
                `<li>
                <input type="checkbox" class="checked-tag" id="${tag}">
                <label for="${tag}">${capitalize(tag)}</label>
                </li>`;
            document.querySelector(".tag-list").insertAdjacentHTML("beforeend", tagHtml);
        });
    },

    hideUnselectedRecipes(foundRecipes) {
        foundRecipes.forEach(recipe => {
            let domRecipe = document.getElementById(`${recipe.id}`);
            domRecipe.style.display = "none";
        });
    }


};

export default domUpdates;