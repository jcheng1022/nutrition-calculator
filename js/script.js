// VARIABLES
const API =
  "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=4PDBxeBJbs8UKxXS7f3dzh6lmYb6hNulqgtrZMq4&query="; // this references to the Edamame API. Add the ingredient to the end to access the data


const foodArray = [];

// EVENT REFERENCES
const $btnSearch = $("#btnSearch");
const $btnAdd = $("#btnAdd");
const $userInput = $('#userInput[type="text"]');
let $selectFood = $('#selectFood');

// EVENT LISTENERS
$btnSearch.on("click", retreiveMacro);
// $btnAdd.on('click', addToList);
// FUNCTIONS

function retreiveMacro(evt) {
  evt.preventDefault();
  const userInput = $userInput.val();
  $.ajax(API + userInput).then(
    function (data) {
        const foodChoices = data.foods;
        for(let i=0;i<foodChoices.length;i++) {
            const foodOption = document.createElement('option')
            foodOption.value = foodChoices[i].description;
            foodOption.innerHTML = foodChoices[i].description
            $selectFood.append(foodOption);
        }
        console.log(foodChoices)
        //   for(let i=0;i<foodChoices.length; i++) {
        //        $selectFood.append(foodChoices.description);
        //    }
        //    for (let i=0; i < foodArray.length; i++) {
        //        console.log()
        //    }
            // console.log(foodArray);
        
    //   const firstResult = data.foods[0];
    //   console.log(firstResult); // this code logs the first
    },
    function (error) {
      console.log("Unexpected Error has occured, see below");
      console.log(error);
    }
  );
}


// function to retrieve food results and turn them into array





/* 
NUTRITION CODES:

PROTEIN: 1003
FAT: 1004
CARBOHYDRATE:1005
CALORIES (IN KCAL): 1008



*/