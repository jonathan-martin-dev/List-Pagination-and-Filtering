/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.getElementsByClassName("student-item");
const studentsPerPage = 10;

//Loop through all students and only show 10 at a time
const showPage = (list, page) => {
  const startIndex = page * studentsPerPage - studentsPerPage;
  const endIndex = page * studentsPerPage;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
};

//Show/hide functionality
showPage(studentList, 1);

//Appends page links to pagination
const appendPageLinks = list => {
  const page = document.querySelector(".page");
  //Create container
  const paginationContainer = document.createElement("div");
  paginationContainer.className = "pagination";
  page.appendChild(paginationContainer);

  //Create unordered list inside of container
  const ul = document.createElement("ul");
  paginationContainer.appendChild(ul);

  //Number of list items that should be generated
  const listLength = Math.ceil(list.length / studentsPerPage) + 1;
  for (let i = 1; i < listLength; i++) {
    //Create list items
    const li = document.createElement("li");
    ul.appendChild(li);

    //Create pagination link tags
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = i;
    li.appendChild(a);
    //Set active class on pagination link
    if (i === 1) {
      a.className = "active";
    }

    //Event handler for clicking pagination links.
    a.addEventListener("click", e => {
      const pageClicked = e.target;
      const pageNumber = a.textContent;
      const links = document.getElementsByTagName("A");

      //Loop through a elements and remove active class except for event target
      for (let j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      pageClicked.classList.add("active");

      //On page clicked students are shown
      showPage(studentList, pageNumber);
    });
  }
};

appendPageLinks(studentList);

//Create Search Bar
const pageHeader = document.querySelector(".page-header");
const searchContainer = document.createElement("div");
const inputEl = document.createElement("input");
const searchButton = document.createElement("button");

//Append to DOM
searchContainer.className = "student-search";
inputEl.type = "text";
inputEl.setAttribute("placeholder", "Search for students...");
searchContainer.appendChild(inputEl);

//Search Button
searchButton.textContent = "Search";
searchContainer.appendChild(searchButton);
pageHeader.insertBefore(searchContainer, pageHeader.childNodes[3]);

//Search Function
const conductSearch = (searchInput, studentNames) => {
  const results = [];
  for (let i = 0; i < studentNames.length; i++) {
    studentNames[i].style.display = "none";
    if (
      searchInput.value.length !== 0 &&
      studentNames[i].textContent
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    ) {
      studentNames[i].style.display = "";
      results.push(studentNames[i]);
    }
  }
  return results;
};

//Create Message Container
const studentListDiv = document.querySelector(".student-list");
const message = document.createElement("p");
message.classList.add("message");
message.textContent = "There are no results";
message.style.fontSize = "3em";
message.style.textAlign = "center";
message.style.padding = "40px";

//Remove pagination links
const removePaginationLinks = () => {
  const removePageLinks = document.querySelector(".pagination");
  removePageLinks.remove();
};

//Get Search Results
const searchResults = () => {
  const results = conductSearch(inputEl, studentList);
  removePaginationLinks();
  showPage(results, 1);
  appendPageLinks(results);
  if (results.length === 0) {
    studentListDiv.appendChild(message);
    message.style.display = "";
  } else {
    message.style.display = "none";
  }
};

//Search Button Event
searchButton.addEventListener("click", () => {
  searchResults();
});

//Input Value Event
inputEl.addEventListener("keyup", () => {
  searchResults();
});
