const container = document.querySelector('.white-board');
const buttonContainer = document.querySelector('.buttons');
const colorChoices = ["black", "f9faf8"];

let selected_color = colorChoices[0];

let cell_num = 16;

let cells;

CreateGrid();
SetUpButtons();

function SetUpButtons(){

    let btn1 = document.getElementById('size16');
    btn1.onclick = () => ReSizeGrid(16);
    
    let btn2 = document.getElementById('size32');
    btn2.onclick = () => ReSizeGrid(32);

    let btn3 = document.getElementById('size64');
    btn3.onclick = () => ReSizeGrid(64);

}

function ReSizeGrid(newSize){
    cell_num = newSize;
    ResetGrid();
}

function CreateArrayOfCells() {
    cells = new Array(cell_num);
    for (let index = 0; index < cells.length; index++) {
        cells[index] = new Array(cell_num);
    }
}

function ResetGrid() {
    DeleteCurrentGrid();
    CreateGrid();
}

function CreateGrid() {

    CreateArrayOfCells()

    for (let i = 0; i < cells.length; i++) {

        const cellArray = document.createElement('div');
        const cellArrayWidth = (1/cell_num) * 100;
        cellArray.style.cssText = `flex-basis: ${cellArrayWidth}%; display: flex; flex-growth: 0; flex-shirnk: 0`;
        container.appendChild(cellArray);

        cellArray.classList.add('cellArray'); 

        for (let j = 0; j < cells[i].length; j++) {
            const cell = document.createElement('div');
            
            cell.classList.add('cell');  
            const basis = (1/cell_num) * 100;
            cell.style.cssText = `flex-basis: ${basis}%; flex-growth: 0; flex-shirnk: 0`;
            cell.addEventListener('click', (e) => {
                if (e.target.style.background == 'black') {
                    e.target.style.background =  `#f9faf8`;
                }else{
                    e.target.style.background = 'black';
                }
                
            });
            cellArray.appendChild(cell);
        }    
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function DeleteCurrentGrid() {
    removeAllChildNodes(container);
    cells = null;
}

