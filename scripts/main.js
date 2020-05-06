const container = document.querySelector('#container');

for(i = 0; i < 256; i++) {
    let grid = document.createElement('div');
    grid.className = 'gridElements';
    grid.setAttribute('id', 'gridNumber' + [i]);

    container.appendChild(grid);
}

const gridElementList = document.querySelectorAll('.gridElements');

for(let j = 0; j < gridElementList.length; j++) {
    gridElementList[j].addEventListener('mouseover', function() {
        gridElementList[j].style.backgroundColor = 'black';
    })
}

const button = document.querySelector('#btn');
button.addEventListener('click', etchASketch)

function etchASketch() {
    let numberPerSide = Number(prompt('How many squares per side?'));
    let numberForGrid = numberPerSide * numberPerSide
}

