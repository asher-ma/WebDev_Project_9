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
  if (selectElement.value == "resaurants") {
    loadData("resaurants");
  }
}

function loadData(dataSet) {
  fetch(`/api/${dataSet}`)
    .then((res) => res.json())
    .then((data) => generateTableBody(data));
}

function generateTableBody(data) {
  console.log(Object.keys(data[0]));
  keys = Object.keys(data[0])
  tableBody = document.getElementById("tableContent");
  for (let i = 0; i < data.length; i++) {
    tableRow = document.createElement("tr");
    generateAppendCell(data[i].keys[0], tableRow);
    generateAppendCell(data[i].keys[1], tableRow);
    generateAppendCell(data[i].keys[2].join(", "), tableRow);
    generateAppendCell(data[i].keys[3], tableRow);
    tableBody.appendChild(tableRow);
  }
}

function generateAppendCell(text, parentElement) {
  childElement = document.createElement("td");
  childElement.innerHTML = text;
  parentElement.appendChild(childElement);
}

// addEventListener("DOMContentLoaded", handleContentLoaded);
