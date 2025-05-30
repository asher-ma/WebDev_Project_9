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
  tableBody = document.getElementById("tableContent");
  for (let i = 0; i < data.length; i++) {
    tableRow = document.createElement("tr");
    generateAppendCell(data[i].name, tableRow);
    generateAppendCell(data[i].major, tableRow);
    generateAppendCell(data[i].clubs.join(", "), tableRow);
    generateAppendCell(data[i].gpa, tableRow);
    tableBody.appendChild(tableRow);
  }
}

function generateAppendCell(text, parentElement) {
  childElement = document.createElement("td");
  childElement.innerHTML = text;
  parentElement.appendChild(childElement);
}

// addEventListener("DOMContentLoaded", handleContentLoaded);
