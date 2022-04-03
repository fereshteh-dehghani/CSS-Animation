const fill=document.querySelector('.fill');
const empties=document.querySelectorAll('.empty');
let dragItem=null;

/* Fill Listeners */
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);




/* Loops through empties */
for(const empty of empties){
    this.addEventListener('dragover',dragOver);
    this.addEventListener('dragenter',dragEnter);
    this.addEventListener('dragleave',dragLeave);
    this.addEventListener('drop',dragDrop);

}



/* Functions Drag */
function dragStart (){
// console.log('start');
this.className +=' hold';
setTimeout(()=>this.className='invisible',0);
}

function dragEnd(){
   dragItem=this;
    this.className ='fill';
    dragItem=null;
}

function dragOver(e){
e.preventDefault();
dragItem=this;
    
}
function dragEnter(){
    e.preventDefault();
    dragItem=this;
    this.className +=' hovered';
}  
function  dragLeave(){
    dragItem=this;
    this.className ='empty';  
}
function dragDrop (){
  
    // this.className ='empty';
    this.append(dragItem);
}
