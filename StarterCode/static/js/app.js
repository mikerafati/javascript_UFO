// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);


      data.forEach(function(eachdata) {
          console.log(eachdata);
          var row = tbody.append("tr");
          Object.entries(eachdata).forEach(function([key, value]) {
            console.log(key, value);
           
            var cell = tbody.append("td");
            cell.text(value);
          }); 
        });
        


// YOUR CODE HERE!
var submit = d3.select("#filter-btn");
var empty = d3.select("tbody")
submit.on("click", function() {
    empty.html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
    
    
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
