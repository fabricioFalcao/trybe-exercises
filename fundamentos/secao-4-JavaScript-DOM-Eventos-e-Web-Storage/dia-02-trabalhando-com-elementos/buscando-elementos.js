console.log(document.getElementById('where-are-you'));

document.querySelector('#where-are-you').parentElement.style.color = 'blue';

document.getElementById('where-are-you').firstElementChild.innerText = 'Nod if you can hear me.';

console.log(document.getElementById('parent').children[0]);
console.log(document.querySelector('#parent').childNodes[1]);

console.log(document.getElementById('where-are-you').previousElementSibling);

console.log(document.querySelector('#where-are-you').nextSibling);

console.log(document.getElementById('where-are-you').nextElementSibling);

console.log(document.getElementById('parent').children[2]);
console.log(document.querySelector('#parent').childNodes[5]);
console.log(document.querySelector('#parent').lastElementChild.previousElementSibling);