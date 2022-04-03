localStorage.setItem('name','fereshte');
console.log(localStorage.getItem('name'));
 localStorage.setItem('family','dehghani');
 const family=localStorage.getItem('family');
 console.log(family);
/* remove */
 localStorage.removeItem('name');


 /* session storage */
//1.set Item
sessionStorage.setItem('name','asra');
sessionStorage.setItem('name2','anna');
sessionStorage.setItem('name3','zainab');
sessionStorage.setItem('name4','ali');
sessionStorage.setItem('name6','azim');
sessionStorage.setItem('name7','omid');
sessionStorage.setItem('family','dehghani');


/*remove Item */
 sessionStorage.removeItem('name');
 let name7 = sessionStorage.getItem('name6');
 console.log(name7);

 /* coockie */
 document.cookie='name = asana; expires=' +new Date(2022,2,5)
 .toUTCString();

 document.cookie='name = armita; expires=' +new Date(2012,2,5)
 .toUTCString();

console.log(document.cookie);