// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(data) {

    tbody.html("");

    data.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
}

  
function runClick() {
    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        buildTable(filteredData);
        }
    }
  
d3.selectAll("#filter-btn").on("click", runClick);
    
buildTable(tableData);