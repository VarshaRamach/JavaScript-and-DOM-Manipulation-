// from data.js

var tableData = data;
console.log(tableData);

// Getting a reference to the input element on the page
var submit = d3.select("#filter-btn");
// d in d3 is an anonymous function
d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${
      d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  d3.select("tbody").html("");

  var filteredData = tableData;

  // Select the input element and get the raw HTML node
  var datetimeInput = d3.select("#datetime");
  var datetimeValue = datetimeInput.property("value");

  var cityInput = d3.select("#city");
  var cityValue = cityInput.property("value");

  var stateInput = d3.select("#state");
  var stateValue = stateInput.property("value");

  var countryInput = d3.select("#country");
  var countryValue = countryInput.property("value");

  var shapeInput = d3.select("#shape");
  var shapeValue = shapeInput.property("value");

  console.log(`datetimeValue: ${datetimeValue}
    cityValue: ${cityValue}
    stateValue: ${stateValue}
    countryValue: ${countryValue}
    shapeValue: ${shapeValue}
    `);

  if (datetimeValue !== "") {
    filteredData = filteredData.filter(row => row.datetime === datetimeValue);
  }
  if (cityValue !== "") {
    filteredData = filteredData.filter(row => row.city === cityValue);
  }
  if (stateValue !== "") {
    filteredData = filteredData.filter(row => row.state === stateValue);
  }
  if (countryValue !== "") {
    filteredData = filteredData.filter(row => row.country === countryValue);
  }
  if (shapeValue !== "") {
    filteredData = filteredData.filter(row => row.shape === shapeValue);
  }

  d3.select("tbody")
    .selectAll("tr")
    .data(filteredData)
    .enter()
    .append("tr")
    .html(function(d) {
      return `<td>${
        d.datetime
      }</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
    });
});