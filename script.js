const heading = document.querySelector('.heading');
const characters = heading.textContent.match(/[\w\W]/g);    
heading.textContent = '';    


characters.forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  heading.appendChild(span);
});


let char = 0;
let timer = setInterval(setChar, 100);


function setChar(){
  const spanChar = document.querySelectorAll('span')[char];
  spanChar.className = 'fade';
  char++;
  char === characters.length && clearInterval(timer);
}