/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.getElementsByClassName('student-item');
const studentsPerPage = 10;
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
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

//Testing show/hide functionality
console.log(showPage(studentList, 1));





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
         const listLength = list.length / studentsPerPage;
         for (let i = 1; i < listLength; i++) {
            //Create list items 
            const li = document.createElement('li');
            ul.appendChild(li);
            
            //Create link tags
            const a = document.createElement('a');
            
            a.setAttribute('href', '#');
           
            a.textContent = i;
            li.appendChild(a);

            a.addEventListener('click',() => {

            });
         }
}


appendPageLinks(studentList);



// Remember to delete the comments that came with this file, and replace them with your own code comments.