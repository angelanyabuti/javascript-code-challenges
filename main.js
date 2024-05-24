//The DOM 
//selection
//Single Element selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//multiple element
const items = document.querySelectorAll('.item');

items.forEach((item)=>console.log(item));