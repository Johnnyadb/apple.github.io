const grid = document.getElementById('minesweeper');
const rows = 10;
const cols = 10;
const mineCount = 20;
let board = [];

function init() {
    board = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({
        mine: false,
        revealed: false,
        flagged: false,
        adjacentMines: 0
    })));

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (!board[row][col].mine) {
            board[row][col].mine = true;
            minesPlaced++;
        }
    }

    // Calculate adjacent mines
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col].mine) {
                for (let y = -1; y <= 1; y++) {
                    for (let x = -1; x <= 1; x++) {
                        const newRow = row + y;
                        const newCol = col + x;
                        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                            board[newRow][newCol].adjacentMines++;
                        }
                    }
                }
            }
        }
    }

    // Draw grid
    grid.style.gridTemplateColumns = `repeat(${cols}, 40px)`;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('click', () => revealCell(row, col));
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                markCell(row, col);
            });
            grid.appendChild(cell);
        }
    }
}

function revealCell(row, col) {
    const cell = board[row][col];
    const htmlCell = grid.children[row * cols + col];
    if (cell.revealed || cell.flagged) {
        return;
    }
    cell.revealed = true;
    htmlCell.classList.add('revealed');

    if (cell.mine) {
        htmlCell.textContent = '💣';
        htmlCell.classList.add('mine');
        gameOver();
    } else {
        if (cell.adjacentMines > 0) {
            htmlCell.textContent = cell.adjacentMines;
        } else {
            // Flood fill
            for (let y = -1; y <= 1; y++) {
                for (let x = -1; x <= 1; x++) {
                    const newRow = row + y;
                    const newCol = col + x;
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !board[newRow][newCol].revealed) {
                        revealCell(newRow, newCol);
                    }
                }
            }
        }
    }
}

function markCell(row, col) {
    const htmlCell = grid.children[row * cols + col];
    const cell = board[row][col];
    if (!cell.revealed) {
        if (!cell.flagged) {
            htmlCell.textContent = '🚩';
            cell.flagged = true;
        } else {
            htmlCell.textContent = '';
            cell.flagged = false;
        }
    }
}

function gameOver() {
    console.log('Game Over. Revealing all mines.');
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = board[row][col];
            const htmlCell = grid.children[row * cols + col];
            if (cell.mine) {
                htmlCell.textContent = '💣';
                htmlCell.classList.add('mine');
            }
            htmlCell.removeEventListener('click', () => revealCell(row, col));
            htmlCell.removeEventListener('contextmenu', (e) => {
                e.preventDefault();
                markCell(row, col);
            });
        }
    }
}

init();
