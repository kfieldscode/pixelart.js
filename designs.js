//declaring variables
const setSize = document.querySelector('.size-setter');
const gridCanvas = document.querySelector('.grid-canvas');

// builds grid
function makeGrid() {
    const gridHeight = document.querySelector('.input-height').value;
    const gridWidth = document.querySelector('.input-width').value;
// prevents multiple grids from generating when click submit/clear
    gridCanvas.innerHTML = "";
// builds rows & cells
    for (let i = 1; i <= gridHeight; i++) {
        let gridRow = document.createElement('tr');
        gridCanvas.appendChild(gridRow);
        for (let j = 1; j <= gridWidth; j++) {
            let gridCell = document.createElement('td');
            gridRow.appendChild(gridCell);
        }
    }
}

makeGrid(25,25);

// prevents grid dimensions from resetting to default when clicking submit/clear
setSize.addEventListener('submit', function (e) {
    e.preventDefault();
    makeGrid();
});

// listens for mouse press on grid
gridCanvas.addEventListener('mouseup', function () {
    down = false;
});

gridCanvas.addEventListener('mousedown', function (e) {
    down = true;
    const color = document.querySelector('.color-picker').value;
    if (e.target.tagName === 'TD') {
        e.target.style.backgroundColor = color;
    }
});

// enables mouse dragging color fill
gridCanvas.addEventListener('mousemove', function (e) {
    const color = document.querySelector('.color-picker').value;
    if (down) {
        if (e.target.tagName === 'TD') {
            e.target.style.backgroundColor = color;
        }
    }
});

// erases with double click
gridCanvas.addEventListener('dblclick', e => {
    e.target.style.backgroundColor = null;
});
