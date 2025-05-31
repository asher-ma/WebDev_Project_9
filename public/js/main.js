function handleSelectChange() {
  selectElement = document.getElementById("dataSelect");
  console.log(selectElement.value);
  if (selectElement.value == "students") {
    loadData("students");
  }
  if (selectElement.value == "videogames") {
    loadData("videogames");
  }
  if (selectElement.value == "movies") {
    loadData("movies");
  }
  if (selectElement.value == "restaurants") {
    loadData("restaurants");
  }
}

function loadData(dataSet) {
  // TODO: reset table
  fetch(`/api/${dataSet}`)
    .then((res) => res.json())
    .then((data) => {generateTableHead(data), generateTableBody(data)});
}

function generateTableHead(data) {
  keys = Object.keys(data[0])
  tableHead = document.getElementById("tableHead")
  tableHead.innerHTML = ""
  tableRow = document.createElement("tr")
  for (let i = 0; i < keys.length; i++) {
    generateAppendCell(formatHeader(keys[i]), tableRow, "th")
  }
  tableHead.appendChild(tableRow)
}

function generateTableBody(data) {
  keys = Object.keys(data[0])
  tableBody = document.getElementById("tableContent");
  tableBody.innerHTML = ""
  for (let i = 0; i < data.length; i++) {
    tableRow = document.createElement("tr");
    generateAppendCell(data[i][keys[0]], tableRow, "td");
    generateAppendCell(data[i][keys[1]], tableRow, "td");
    // if (data == "students") {
    //   generateAppendCell(data[i].keys[2].join(", "), tableRow, "td");
    // } else {
    //   generateAppendCell(data[i].keys[2], tableRow, "td");
    // }
    generateAppendCell(data[i][keys[2]].join(", "), tableRow, "td");
    generateAppendCell(data[i][keys[3]], tableRow, "td");
    // if (data == "movies") {
    //   generateAppendCell(data[i].keys[4].join(", "), tableRow, "td");
    // }
    tableBody.appendChild(tableRow);
  }
}

function generateAppendCell(text, parentElement, cellType) {
  childElement = document.createElement(cellType);
  childElement.innerHTML = text;
  parentElement.appendChild(childElement);
}

function formatHeader(headerString){
  // converts camelcase to spaced words with first letter capitalized
  // i.e.: camelCase => Camel Case
  const formatString = headerString
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, function (str) {
        return str.toUpperCase();
      });
  return formatString;
}

// addEventListener("DOMContentLoaded", handleContentLoaded);
