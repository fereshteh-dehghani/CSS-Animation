const img=document.querySelector('img');
const dark=document.querySelector('.dark-mode');

img.addEventListener('click',lightMode());
 function lightMode(){
this.src='./moon-6692.png';
    document.body.classList.toggle('dark-mode'); 
    console.log('darkmode');
 }