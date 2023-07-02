const container = document.querySelector('.white-board');
const buttonContainer = document.querySelector('.buttons');
const colorChoices = ["black", "#f9faf8", "lightblue","cyan", "blue","red", "lightgreen", "green","darkgreen","pink","yellow","orange","brown"];

let selected_color = colorChoices[0];

let cell_num = 16;

let cells;

CreateGrid();
SetUpButtons();
CreateColors()

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
                    e.target.style.background =  selected_color;

            });
            cellArray.appendChild(cell);
        }    
    }

}

function CreateColors() {
    const colorContainer = document.querySelector('.colors');

    for (let i = 0; i < colorChoices.length; i++) {
        const colorCell = document.createElement('div');
        
        
        // colorCell.classList.add('cell');  
        colorCell.classList.add('colorCell');  
        
        colorCell.style.background =  colorChoices[i];
        colorContainer.appendChild(colorCell);

        colorCell.addEventListener('click', (e) => {
            
            selected_color = e.target.style.background;
            
            
        });
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

