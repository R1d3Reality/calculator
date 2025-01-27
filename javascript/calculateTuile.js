const surfaceRoofInput = document.getElementById('surface-roof');
const productSelect = document.getElementById('tuile');
const resultTuile = document.getElementById('result-tuile');

surfaceRoofInput.addEventListener('input', calculateTuile);

function calculateTuile() {
    const selectedValue = parseFloat(productSelect.value);
    const surfaceArea = parseFloat(surfaceRoofInput.value) || 0;

    const tuilesRequired =calculateTuilesRequired(selectedValue, surfaceArea);

    updateResult(tuilesRequired);
}

function calculateTuilesRequired(selectedValue, surfaceArea) {
    return Math.ceil(surfaceArea * selectedValue);
}

function updateResult(tuilesRequired) {
    resultTuile.textContent = `Nombre de tuiles: ${tuilesRequired} pcs`;

}