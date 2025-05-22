let gridSize = 4;
let delay = 400;
let selectedCells = [];

const gridContainer = document.getElementById('grid-container');
const gridSizeInput = document.getElementById('gridSizeInput');
const delayInput = document.getElementById('delayInput');
const applyBtn = document.getElementById('applyBtn');

function createGrid(gridSize) {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => handleCellClick(cell));
    gridContainer.appendChild(cell);
  }
}

function handleCellClick(cell) {
  if (!selectedCells.includes(cell)) {
    cell.classList.add('selected');
    selectedCells.push(cell);
    if (selectedCells.length === gridSize * gridSize) {
      unselectCells();
    }
  }
}

function unselectCells() {
  let index = selectedCells.length - 1;
  const interval = setInterval(() => {
    if (index < 0) {
      clearInterval(interval);
      selectedCells = [];
      return;
    }
    selectedCells[index].classList.remove('selected');
    index--;
  }, delay);
}

applyBtn.addEventListener('click', () => {
  gridSize = parseInt(gridSizeInput.value);
  delay = parseInt(delayInput.value);
  selectedCells = [];
  createGrid(gridSize);
});

// Initialize on page load
window.onload = () => {
  createGrid(gridSize);
};
