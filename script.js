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









console.log(container)