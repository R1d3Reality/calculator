//const for Cloison Gyproc
const widthInputWall = document.getElementById('room-width');
const heightInputWall = document.getElementById('room-height');
const resultHorizontal = document.querySelector('.result-horizontal');
const resultVertical = document.querySelector('.result-vertical');

//Listener for inputs
widthInputWall.addEventListener('input', calculateResultWall);
heightInputWall.addEventListener('input', calculateResultWall);

function calculateResultWall() {
    const widthValue = parseFloat(widthInputWall.value) || 0;
    const heightValue = parseFloat(heightInputWall.value) || 0;

    const resultVerticalLm = Math.ceil(((widthValue / 0.6) + 1) * heightValue);
    const resultVerticalPcs = Math.ceil((resultVerticalLm / 3));

    const resultHorizontalLm = Math.ceil(widthValue * 2);
    const resultHorizontalPcs = Math.ceil(resultHorizontalLm / 4);

    resultVertical.textContent = `MSV: ${resultVerticalLm} lm` + ` PCS: ${resultVerticalPcs} `;
    resultHorizontal.textContent = `MSH: ${resultHorizontalLm} lm` + ` PCS: ${resultHorizontalPcs}`;
}
