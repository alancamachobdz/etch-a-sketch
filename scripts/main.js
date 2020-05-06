const container = document.querySelector('#container');

function createGrid(numberPerSide) {
    for(i = 0; i < numberPerSide; i++) {
        let grid = document.createElement('div');
        grid.className = 'gridElements';
        grid.setAttribute('id', 'gridNumber' + [i]);

        container.appendChild(grid);
    }
}


function sketch() {
    const gridElementList = document.querySelectorAll('.gridElements');
    for(let j = 0; j < gridElementList.length; j++) {
        gridElementList[j].addEventListener('mouseover', function() {
            gridElementList[j].style.backgroundColor = 'black';
        })
    }
}

const button = document.querySelector('#btn');
button.addEventListener('click', etchASketch)

function etchASketch() {
    clearContent();
    let numberForSide = Number(prompt('How many squares per side?'));
    let numberPerSide = numberForSide * numberForSide;
    createGrid(numberPerSide);
    sketch();
}

function clearContent() {
    let content = document.getElementById('container');
    content.innerHTML = '';
}

