// from data.js
var tableData = data;

// * Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and 
// then adds new rows of data for each UFO sighting.

// * Make sure you have a column for `date/time`, `city`, `state`, 
// `country`, `shape`, and `comment` at the very least.

// * Use a date form in your HTML document and write JavaScript code that 
// will listen for events and search through the `date/time` column to find rows that match user input.

// this is a function called renderTable()

// *Need to put the data in here*
var tbody = d3.select("tbody");

// create a function here that loops through CreateTable that loops throu
// the data and maps the variable the tbale takes in to a new TR
// and create a new TR and object.values for each 
// (for each row you're adding new info to that row)
function createTable(newTableData){
    tbody.html("")
    newTableData.map(x => {
        let newTr = tbody.append('tr');
        Object.values(x).forEach(element => {
            newTr.append('td').text(element)
        });
    });
}

createTable(tableData);

// let filterBtn = d3.select('#filter-btn').on('click', function(e){
//     e.preventDefault();
//     console.log('clicked')
//     let dateVal = d3.select('#datetime').node().value
    // call the render Table and use an array
    // filter method to get a value of 
// })

document.getElementById('filter-btn').addEventListener('click', searchButtonClick);


function searchButtonClick() {
    event.preventDefault();
    inputVal = d3.select("#datetime").node().value
    var filterData = tableData
    filterData = filterData.filter(x => x.datetime == inputVal);
    createTable(filterData)
}
;

    // // Format the user's search by removing leading and trailing whitespace, lowercase the string
    // var filterDate = $dateInput.value;
    // var filterState = $stateInput.value.trim().toLowerCase();
    // var filterCity = $cityInput.value.trim().toLowerCase();
    // var filterCountry = $countryInput.value.trim().toLowerCase();
    // var filterShape = $shapeInput.value.trim().toLowerCase();