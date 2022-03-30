const fill=document.querySelector('.fill');
const empties=document.querySelectorAll('.empty');
/* Functions Drag */
const dragStart= () =>{
// console.log('start');
this.className.add('hold');
setTimeout(()=>this.className='invisible',0);
}

const dragEnd=()=>{
    console.log('End');
    this.className ='fill';

}

function dragOver(e){
e.preventDefault();
    
}
function dragEnter(){
    // e.preventDefault();
    this.className.add('hovered');
}  
const  dragLeave=()=>{
    this.className ='empty';
    console.log('leave')
  
}
const dragDrop =()=>{
    this.className='empty';
    this.append(fill);
}


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
