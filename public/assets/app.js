const signInButton = document.querySelector('.toggle span:nth-child(1)');
const signUpButton = document.querySelector('.toggle span:nth-child(2)');
const signInForm = document.querySelector('.sign-in');
const signUpForm = document.querySelector('.sign-up');

signInButton.addEventListener('click', () => {
    signInForm.style.display = 'flex';
    signUpForm.style.display = 'none';
    signInButton.classList.add('active');
    signUpButton.classList.remove('active');
});

signUpButton.addEventListener('click', () => {
    signUpForm.style.display = 'flex';
    signInForm.style.display = 'none';
    signUpButton.classList.add('active');
    signInButton.classList.remove('active');
});

//Script for the meal API

function displayCocktail(data) {
    const cocktail = data.meals[0];
    const cocktailDiv = document.getElementById("cocktail");
  // meal name
  const cocktailName = cocktail.strMeal;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);
  // meal image
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strMealThumb;
  cocktailDiv.appendChild(cocktailImg);
  document.body.style.backgroundImage = "url('" + cocktail.strMealThumb + "')";
  // meal ingredients
  const cocktailIngredients = document.createElement("ul");
  cocktailDiv.appendChild(cocktailIngredients);
  const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});
  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  }
}