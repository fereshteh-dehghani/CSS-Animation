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

     });
     addEventListeners();

     }

/*Swap function */
function swapItems(fromIndex,toIndex){
    const itemOne=listItems[fromIndex].querySelector('.draggable');
    const itemTwo=listItems[toIndex].querySelector('.draggable');
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);


}

function checkOrder(){
listItems.forEach((listItem,index)=>{
    const personName=listItem.querySelector('.draggable')
    .innerText.trim();
    if(personName !==richestPeople[index]){
        listItem.classList.remove('wrong');
        listItem.classList.add('right');

    }
})
}



/* drag functions */
function dragStart(){
    // console.log('Event','dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
}
function dragEnter(){
    // console.log('Event','dragEnter');
    this.classList.add('over');
}
function dragOver(){
    // console.log('Event','dragover');
}
function dragLeave(){
    // console.log('Event','dragLeave');
    this.classList.remove('over')
}
function dragDrop(){
    // console.log('Event','drop');
    const dragEndIndex=+this.grtattribute('data-index');
    swapItems(dragStartIndex,dragEndIndex);
    this.classList.remove('over');
}


      function addEventListeners(){
          const draggables=document.querySelectorAll('.draggable');
          const dragListItems=document.querySelectorAll('.draggable-list li');
          
          draggables.forEach(draggable=>{
              draggable.addEventListener('dragstart',dragStart);
          });
           
          draggables.forEach(item=>{
            item.addEventListener('dragover',dragOver);
            item.addEventListener('drop',dragDrop);
            item.addEventListener('dragenter',dragEnter);
            item.addEventListener('dragleave',dragLeave);
        });
      }

      check.addEventListener('click',checkOrder);
 