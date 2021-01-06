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
