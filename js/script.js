// VARIABLES
const API = "https://api.edamam.com/api/nutrition-data?app_id=de21053a&app_key=10429744998e546c52222babd34059a1&nutrition-type=logging&ingr=";  // this references to the Edamame API. Add the ingredient to the end to access the data

// EVENT REFERENCES
const $btnSearch = $('#btnSearch');
const $btnAdd = $('#btnAdd');
const $userInput = $('#userInput[type="text"]');
// EVENT LISTENERS
$btnSearch.on('click', retreiveMacro);
// $btnAdd.on('click', addToList);
// FUNCTIONS

function retreiveMacro(evt) {
    evt.preventDefault();
    $.ajax(API + $userInput).then(function(data){
        console.log(data)
    }, function(error) {
        console.log('Unexpected Error has occured, see below')
        console.log(error)
    }
    
    )
}

