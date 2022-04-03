const draggable_List=document.getElementById('draggable-list');
const check=document.getElementById('check');



const richestPeople=[
    'Elon Musk',
    'Jeff Bezos',
    ' Bernard Arnault',
    'Bill Gates',
    'Warren Buffett',
    'Larry Page',
    'Sergey Brin',
    'Steve Ballmer',
    ' Larry Ellison',
    'Gautam Adani'
];
console.log(richestPeople);
const listItems=[];
 let dragStartIndex;
 createList();
 /* insert list item into DOM */

 function createList(){
     [...richestPeople]
     .map(a=>({value:a,sort:Math.random()}))
     .sort((a,b)=>a.sort-b.sort)
     .map(a=>a.value)
     .forEach((person,index)=>{
         console.log(person)
         const listItem=document.createElement('li');
         listItem.classList.add('right');
         listItem.setAttribute('data-index',index);
         listItem.innerHTML=`<span class="number" >${index+1}</span>
         <div class="draggable"  draggable="true">
         <p class="person-name">
         ${person}
         <i class="fas fa-grip-lines"></i>
         </p>
         </div>`;

         listItems.push(listItem);
         draggable_List.appendChild(listItem);

     })

     }
 