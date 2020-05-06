const container = document.querySelector('#container');

for(i = 0; i < 256; i++) {
    let grid = document.createElement('div');
    grid.className = 'gridElements';
    grid.setAttribute('id', 'gridNumber' + [i]);

    container.appendChild(grid);
}

const gridElementList = document.querySelectorAll('.gridElements');
console.log(gridElementList);
for(let j = 0; j < gridElementList.length; j++) {
    gridElementList[j].addEventListener('mouseover', function() {
        gridElementList[j].style.backgroundColor = 'black';
    })
}

