const domUpdates = {
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
        main.insertAdjacentHTML("beforeend", cardHtml);
    },
