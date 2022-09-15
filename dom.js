var itemlist=document.querySelector('#items');
console.log(itemlist);
console.log(itemlist.parentNode.style.background='yellow');
console.log(itemlist.parentElement);
console.log(itemlist.lastElementChild.style.background='red');
console.log(itemlist.firstElementChild.textContent='wow');
console.log(itemlist.nextSibling);
console.log(itemlist.previousElementSibling.style.background='blue');
var newdiv=document.createElement('div');
console.log(newdiv);
newdiv.className='hello';
newdiv.id='hello123';
newdiv.setAttribute('title','hello div')
 var newdivtext=document.createTextNode('hello world');
 newdiv.appendChild(newdivtext);
    
 var container =document.querySelector('header .container');
 var h1=document.querySelector('header h1');
 container.insertBefore(newdiv,h1);




