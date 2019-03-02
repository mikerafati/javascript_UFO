// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(eachdata){
  console.log(eachdata);
});
data.forEach(function(eachdata) {
    console.log(eachdata);
    
  });

  data.forEach(function(eachdata) {
      console.log(eachdata);
      
    
      Object.entries(eachdata).forEach(function([key, value]) {
        console.log(key, value);
      });
    });

    data.forEach(function(eachdata) {
        console.log(eachdata);
       
      
        Object.entries(eachdata).forEach(function([key, value]) {
          console.log(key, value);
          
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
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
// var datetimeInput = d3.select("#datetime");
// var filterbtn = d3.select("#filter-btn");
// filterbtn.addEventListener('click', handleFilterTableButtonClick);

// function handleFilterTableButtonClick(){
//     var filterdate = $datetimeInput.value.trim().tolowerCase();
//     tableData = data.filter(function(data){
//     var  
//     })
// }
//     var button = $datetimeInput