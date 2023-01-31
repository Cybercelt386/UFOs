// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function helloworld() {
    console.log("Hello world!");
}

addition = (a,b) => a + b;

doubleaddition = (a,b) => addition(a,b) * 2;

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];


function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }


 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];


for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

let numbers = [1,2,3,4,5,6]; 
numbers.forEach( (element) => {
  console.log(element**2)
});

function buildTable(data) {
    tbody.html("")
}

 data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

  function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {

      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }



  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };
  
  d3.selectAll("#filter-btn").on("click", handleClick);

  buildTable(tableData);
