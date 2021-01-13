# Refactor Tractor: What's Cookin'?

Do you like eating?  If so, try cooking. And we can help!

This is a group project for [Turing School](https://turing.io/) in Module 2, which introduced us to working with pre-existing code in preparation for any legacy codebases we may work with in the future. 

We recieved some existing code and were able to refactor and build out the functionality, with emphasis on DRY logic and accessibility, as well as using **dynamic** fetch requests to API endpoints to reflect a strong data model.

This project helped us practice familiarizing ourselves with exisiting code, working asynchronously with three others a project in a relatively short time-frame, and honed our planning, communication and project managament.

Our site, 'What's Cookin'?', displays a variety of recipes to tempt your taste-buds. A user is free to:
 - puruse the recipes
 - search recipes by keyword
 - search recipes by types/tags
 - add interesting recipes to a list of recipes 'to cook'
 - add tasty recipes to a list of recipe 'favorites'
 - keep track of ingredients in a 'pantry'
 - search for ingredients in the 'pantry'
 - add ingredients to the 'pantry'
 - see what recipes can be made using exisiting 'pantry' ingredients
 - for each recipe, see which ingredients are missing from the 'pantry'
 - 'cook' a recipe, and see the pantry amounts reflect the ingredients used
 - display the cost of the recipes with very real and accurate prices
  
## Setup

//DO THIS DO THIS DO THIS DO THIS:
If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.

Visit the site at [GitHub Pages](https://pages.github.com/)

Otherwise, in order to deploy this site locally, a user will have to run a local server.

  1. Clone (or fork and then clone) this repo with  `git clone git@github.com:JeffKersting/refactor-tractor-whats-cookin.git [what you want to name the repo]`
  2. Change into the directory and run `npm install` to install project dependencies.
  3. Run `npm start` to start a local server 
  4. To access the site in your browser, navigate to the localhost address that your terminal gives you. 
  5. For any of the class tests, run ```npm test [name of the test you want to run]``` 
  6. Enter `control + c` in your terminal to stop the server at any time.

## Contributors

[This project](https://frontend.turing.io/projects/module-2/refactor-tractor-wc.html) was used exisiting code from previous students and staff at [Turing School Staff](https://turing.io/)

This refactor was coded by [Jeff Kersting](https://github.com/JeffKersting), [Allison Dietz](https://github.com/dietza), [Thao Ma](https://github.com/thaomonster) and [Alice Ruppert](https://github.com/srslie).

Special thanks to our mentors [Scott Schipke](https://github.com/sschipke) 

//ADD MENTORS?

## Technologies

During this project we gained experience with the following technologies:
- ES6 JavaScript
- Augmenting exising code
- Testing with Mocha and Chai
- Linting with ESLint
- Semantic HTML
- Responsive SCSS with Media Queries
- Wave, ColorBlind, and ARIA Accessibility
- Using network requests with API endpoints and async JavaScript
- Using Webpack to compile mulitple class and script files
- Deploying a site on GitHub Pages
- Git workflow using GitHub Issues and Project Kanban Board
  
## Future Iterations

If time permitted, we would've loved to accomplish more. 

No future work is planned on this project, but we've added some possible future steps for if we were to continue.

Ideas for future iterations:
 - It would be nice to do more data cleanup and type validation in the server data, because of some strange bugs with quantity concatination instead of addition, or undefined properties.
 - Prices should be shown for items based on real prices from a set store/able to be input by a user.
   - Possibly using Google Mapping API in order to pull that for users
 - Images for each recipes could be more uniform/attractive, as they tend to get stretched now.
 - We would love to have more recipes or the ability for a user to upload their own favorite recipes.
 - Local storage could be used to persist users from session to session.
 - User login validation could utilize a password or other information based on additional server data, with additional preferences for each user.
 - It would be nice to feature the display of certain recipes based on commonly cooked recipes by each user or ingredients a user has.
 - In addition to cooking a recipe, a user could make notes about how they cooked a recipe in case they wanted to reference any suggestions for future cooks.
 - Recipes could have comments by users for all users to see suggestions or reviews.
 - Ingredient having a link to show another page of where they can buy the ingredient around them and list all the prices from each store 
   - This might be a way for a site like this to intake revenue
 - In order to let users see/search for more common names for ingredients, update the server data with common ingredient names 


## Challenges & Wins

Challenges include:
- making sure that everyone is on the same page about where issues are
- figuring out the data inconsistencies with server data
- approaching and incorporating new technologies
- working with an exisiting codebase

Wins include:
- successfully incorporating Webpack, SCSS, and using API
## In Action:

![GIF OF SITE ON BROWSER]()

![GIF OF SITE ON MOBILE]()
