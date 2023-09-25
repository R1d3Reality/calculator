const surfaceInputTiles = document.getElementById('surface-tiles');
const resultTiles = document.getElementById('result-tiles');

surfaceInputTiles.addEventListener('input', calculateTiles);
function calculateTiles () {
    const selectedElement = document.getElementById('tiles');
    const selectedValue = parseFloat(selectedElement.value) || 0;

    const surfaceValue = parseFloat(surfaceInputTiles.value) || 0;

    const resultInBag = Math.ceil(surfaceValue / selectedValue);
    resultTiles.textContent = `Nombre de paquets de carrelage ${resultInBag} pcs`

}