const cells = document.querySelectorAll('.cell');
const reset = document.querySelector('.reset');
let currentPlayer = 'X';
let gameActive = true;

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
  //   console.log(cell.dataset);
});

function handleCellClick(e) {
  if (!gameActive) return;

  const cell = e.target;
  if (cell.dataset.cell === '') {
    cell.innerText = currentPlayer;
    cell.dataset.cell = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(`Gracz ${currentPlayer} wygrał!`);
      gameActive = false;
    } else if (checkDraw()) {
      alert('Remis!');
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombos.some(combination => {
    return combination.every(index => cells[index].dataset.cell === player);
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.dataset.cell !== '');
}

function resetBoard() {
  cells.forEach(cell => {
    cell.innerText = '';
    cell.dataset.cell = '';
  });
  currentPlayer = 'X';
  gameActive = true;
}

reset.addEventListener('click', resetBoard);
