const img=document.querySelector('img');
const dark=document.querySelector('.dark-mode');

img.onclick=
 () => {
    document.body.classList.toggle('dark-them'); 
    console.log('darkmode');
   
 }