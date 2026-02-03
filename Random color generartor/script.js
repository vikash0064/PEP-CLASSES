const boxContainer = document.getElementById('boxContainer');
const NUM_BOXES = 30;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBoxColor(box) {
    const newColor = getRandomColor();
    box.style.backgroundColor = newColor;
    box.textContent = newColor;
}

function changeAllColors() {
    const boxes = document.querySelectorAll('.colorBox');
    boxes.forEach(box => {
        changeBoxColor(box);
    });
}

function createBoxes() {
    for (let i = 0; i < NUM_BOXES; i++) {
        const box = document.createElement('div');
        box.className = 'colorBox';
        const randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
        box.textContent = randomColor;
        box.addEventListener('click', () => changeBoxColor(box));
        boxContainer.appendChild(box);
    }
}

createBoxes();
changeAllColors();  