const surfaceInputMapei = document.getElementById('surface-mapei');
const thickInputMapei = document.getElementById('thick-mapei');
const productSelect = document.getElementById('mapei');
const resultMapei = document.getElementById('result-mapei-bag');

surfaceInputMapei.addEventListener('input', calculateMapei);
thickInputMapei.addEventListener('input', calculateMapei);

function calculateMapei() {
    const selectedValue = parseFloat(productSelect.value);
    const surfaceArea = parseFloat(surfaceInputMapei.value) || 0;
    const thickness = parseFloat(thickInputMapei.value) || 0;

    const bagsRequired = calculateBagsRequired(surfaceArea, thickness, selectedValue);

    updateResult(bagsRequired);
}

function calculateBagsRequired(surfaceArea, thickness, selectedValue) {
    return Math.ceil((surfaceArea * thickness * selectedValue) / 25);
}

function updateResult(bagsRequired) {
    resultMapei.textContent = `Nombre de sacs de 25kg: ${bagsRequired} pcs`;
}
