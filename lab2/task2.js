const body = document.querySelector('body');
const VARIANT = 1;
 
for (let r = 0; r < 6; r++) {
  const rowElement = document.createElement('tr');
  for (let d = 0; d < 6; d++) {
  const index = String(d + 1 + (r * 6));
  const dataElement = document.createElement('td');
  dataElement.innerHTML = index;
  dataElement.id = index;
  rowElement.appendChild(dataElement);
  body.appendChild(rowElement);
  }
}  
      
function onMouseClickCell(element) {
  element.style.background = document.getElementById('current_color').value;
}
 
function onDoubleClickCell() {
  const startColumn = VARIANT;
  for (let j = startColumn; j <= 36; j += 36) {
    for (let i = 0; i < 6; i++) {
      const currentElement = document.getElementById(String(j + i));
      currentElement.style.background = document.getElementById('current_color').value;
    }
  }
}
 
function onMouseOverRandomBg(element) {
    element.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ')';
}
 
const elementByVariant = document.getElementById(String(VARIANT));
 
elementByVariant.onmouseover = () => {
  onMouseOverRandomBg(elementByVariant);
};

elementByVariant.onmouseup = () => {
    onMouseClickCell(elementByVariant);
};
   
elementByVariant.ondblclick = () => {
    onDoubleClickCell();
};