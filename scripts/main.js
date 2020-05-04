const container = document.querySelector('#container');

for(i = 0; i < 256; i++) {
    let grid = document.createElement('div');
    grid.className = 'gridElements';

    container.appendChild(grid);
}