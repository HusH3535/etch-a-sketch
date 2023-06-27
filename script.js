const container = document.querySelector('.white-board');

const cell_num = 16;

let cells = new Array(cell_num);

for (let index = 0; index < cells.length; index++) {
    cells[index] = new Array(cell_num);
}

for (let i = 0; i < cells.length; i++) {
    const cellArray = document.createElement('div');
    const cellArrayWidth = (1/cell_num) * 100;
    cellArray.style.cssText = `flex-basis: ${cellArrayWidth}%; display: flex; flex-growth: 0; flex-shirnk: 0`;
    container.appendChild(cellArray);
    for (let j = 0; j < cells[i].length; j++) {
        const div = document.createElement('div');
        
        div.classList.add('cell');  
        const basis = (1/cell_num) * 100;
        div.style.cssText = `flex-basis: ${basis}%; flex-growth: 0; flex-shirnk: 0`;
        cellArray.appendChild(div);
    }    
}









console.log(container)