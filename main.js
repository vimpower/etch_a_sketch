const grid = document.querySelector('.grid');
const currentColor = document.querySelector('.currentColor')
let color = 'black';
let paintOn = false;


function paintColor(e){
    if(paintOn === true){
        this.style.backgroundColor = color;
    }
    // console.log(this)
}
function switchColor(e){
    paintOn = !paintOn;
    color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    currentColor.style.backgroundColor = color;
}

function createCells(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++){
        let node = document.createElement('div');
        node.addEventListener('mouseover', paintColor);
        node.addEventListener('mousedown', switchColor);
        // node.style.border = '0.1px solid red'
        grid.appendChild(node);
    }
}

createCells(Math.random() * 16 + 4);