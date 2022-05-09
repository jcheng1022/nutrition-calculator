// VARIABLES
const API =
  "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=4PDBxeBJbs8UKxXS7f3dzh6lmYb6hNulqgtrZMq4&query="; // this references to the Edamame API. Add the ingredient to the end to access the data


const foodArray = [];

// EVENT REFERENCES
const $btnSearch = $("#btnSearch");
const $btnAdd = $("#btnAdd");
const $userInput = $('#userInput[type="text"]');
const $selectFood = $('#selectFood');
const selectedFood = $('#selectFood option:selected');
const $caloriesInfo = $('caloriesInfo');
const $fatInfo = $('fatInfo');
const $carbohydrateInfo = $('carbohydrateInfo');
const $proteinInfo = $('carbohydrateInfo');
const $listOfAddedFoods = $('#listOfAddedFoods');
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
    $btnAdd.click(function(evt){
      evt.preventDefault();
        const foodMenu = document.getElementById('selectFood');
        const foodMenuValue = foodMenu.value; 
        const individualFood = foodChoices[foodMenuValue]; // this prints out everything about the selected food
        const individualFoodNutrients = individualFood.foodNutrients // this prints out all the nutrients
        const protein = individualFoodNutrients[14].value;
        console.log(individualFoodNutrients);

  

      // const chosenValue = document.getElementById('selectFood').value;
      // console.log(chosenValue.description)
    })
      },
    
    function (error) {
      console.log("Unexpected Error has occured, see below");
      console.log(error);
    },
  );
}

// $btnAdd.click(function(evt) {
//   evt.preventDefault();
//   const selectedFood = $('selectFood option:selected')
//   $listOfAddedFoods.append(`<li>${selectedFood.description}</li>`);
// })

/* 
NUTRITION CODES:

PROTEIN: 1003
FAT: 1004
CARBOHYDRATE:1005
CALORIES (IN KCAL): 1008



*/