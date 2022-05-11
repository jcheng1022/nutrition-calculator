// VARIABLES
const API =
  "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=4PDBxeBJbs8UKxXS7f3dzh6lmYb6hNulqgtrZMq4&query="; // this references to the Edamame API. Add the ingredient to the end to access the data


const foodArray = [];

// EVENT REFERENCES
const $btnSearch = $("#btnSearch");
const $btnGet = $("#btnGet");
const $userInput = $('#userInput[type="text"]');
const $selectFood = $('#selectFood');
const selectedFood = $('#selectFood option:selected');
const $caloriesInfo = $('caloriesInfo');
const $fatInfo = $('fatInfo');
const $carbohydrateInfo = $('carbohydrateInfo');
const $proteinInfo = $('proteinInfo');
const $listOfAddedFoods = $('#listOfAddedFoods');
const $macroList = $('#macroList');
const $protein = $('#protein');
const $carbohydrate = $('#carbohydrate');
const $fat = $('#fat');
const $calories = $('#calories');
// EVENT LISTENERS
$btnSearch.on("click", searchFoods);
// $btnAdd.on("click", addIngredient);
// function addIngredient(evt) {
//     evt.preventDefault();
//     console.log(foodOption.value);
// }
// $btnAdd.on('click', addToList);
// FUNCTIONS

function searchFoods(evt) {
  evt.preventDefault();
  const userInput = $userInput.val();
  const searchQuery = $.ajax(API + userInput);
  searchQuery.then(
    function (data) {
        const foodChoices = data.foods;
        for(let i=0;i<foodChoices.length;i++) {
            const foodOption = document.createElement('option');
            foodOption.value = i;
            foodOption.innerHTML = foodChoices[i].description;
            $selectFood.append(foodOption);
        }  
    $btnGet.click(function(evt){
      evt.preventDefault();
        const foodMenu = document.getElementById('selectFood');
        const foodMenuValue = foodMenu.value; 
        const individualFood = foodChoices[foodMenuValue]; // this prints out everything about the selected food
        const individualFoodNutrients = individualFood.foodNutrients // this prints out all the nutrients

        for (let i=0; i < individualFoodNutrients.length; i++) {
          const totalNutrient = individualFoodNutrients[i];
          const nameOfNutrient = individualFoodNutrients[i].nutrientName;
          const idOfNutrient = individualFoodNutrients[i].nutrientId;
          const nutrientValue = individualFoodNutrients[i].value;
          $macroList.append(`<li>${nameOfNutrient}: ${nutrientValue}</li>`);
          if (idOfNutrient === 1003) {
            $protein.append(` : ${nutrientValue}`);
          } else if (idOfNutrient === 1004) {
            $fat.append(` : ${nutrientValue}`);
          } else if (idOfNutrient === 1005) {
            $carbohydrate.append(` : ${nutrientValue}`);
          } else if (idOfNutrient === 1008) {
            $calories.append(` : ${nutrientValue}`);
          }
        } // this loop prints out every nutrient


    })
      },
    
    function (error) {
      console.log("Unexpected Error has occured, see below");
      console.log(error);
    },
  );
}


