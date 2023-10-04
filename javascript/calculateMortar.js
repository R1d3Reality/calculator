const inputSurfaceBloc = document.getElementById('surface-mur');
const resultMortier = document.getElementById('result-mortar-bag');
const selectBloc = document.getElementById('bloc');

inputSurfaceBloc.addEventListener('input', calculateMortier);

function calculateMortier() {
    const selectedValue = parseFloat(selectBloc.value) || 0;
    const surfaceArea = parseFloat(inputSurfaceBloc.value) || 0;

    const bagsRequired = calculateBagsRequired(surfaceArea, selectedValue);

    updateResult(bagsRequired);
}

function calculateBagsRequired(surfaceArea, selectedValue) {
    return Math.ceil(surfaceArea / (17 / selectedValue));
}

function updateResult(bagsRequired) {
    resultMortier.textContent = `Nombre de sacs de 25kg: ${bagsRequired} pcs`;
}
