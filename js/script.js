/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.getElementsByClassName('student-item');
const studentsPerPage = 10;

//Loop through all students and only show 10 at a time
const showPage = (list, page) => {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = (page * studentsPerPage);
   for (let i = 0; i < list.length; i++) {
     if (i >= startIndex && i <= endIndex) {
        list[i].style.display = '';
     } else {
        list[i].style.display = 'none';
     }
   }
}

//Show/hide functionality
showPage(studentList, 1);





//Appends page links to pagination   
const appendPageLinks = (list) => {
         const page = document.querySelector('.page');
         //Create container
         const paginationContainer = document.createElement('div');
         paginationContainer.className = 'pagination';
         page.appendChild(paginationContainer);
         
         //Create unordered list inside of container
         const ul = document.createElement('ul');
         paginationContainer.appendChild(ul);
         
         
         //Number of list items that should be generated
         const listLength = list.length / studentsPerPage + 1;
         for (let i = 1; i < listLength; i++) {
            //Create list items 
            const li = document.createElement('li');
            ul.appendChild(li);
            
            //Create pagination link tags
            const a = document.createElement('a');      
            a.setAttribute('href', '#');
            a.textContent = i;
            li.appendChild(a);
               //Set active class on pagination link
               if (i === 1) {
                  a.className = 'active';
               }

               //Event handler for clicking pagination links.
               a.addEventListener('click',(e) => {
                  const pageClicked = e.target;
                  const pageNumber = a.textContent;
                  const links = document.getElementsByTagName('A');
                  
                  //Loop through a elements and remove active class except for event target
                  for(let j = 0; j < links.length; j++) {
                    links[j].classList.remove('active');
                  }
                  pageClicked.classList.add('active');

                  //On page clicked students are shown
                  showPage(studentList, pageNumber);
               });
            };           
         }
         //Click event on pagination link
      


appendPageLinks(studentList);
