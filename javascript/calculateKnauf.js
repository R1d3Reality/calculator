const surfaceInputKnauf = document.getElementById('surface-knauf');
const resultKnauf = document.getElementById('result-knauf');
surfaceInputKnauf.addEventListener('input', calculateKnauf);
function calculateKnauf() {
    const selectedElement = document.getElementById('knauf');
    const selectedValue = parseFloat(selectedElement.value);
    const valueSurface = parseFloat(surfaceInputKnauf.value) || 0;
    const resultKg = Math.ceil(valueSurface / selectedValue);

    let resultBucket;
    let productName;

    switch (selectedValue) {
        case 0.3:
            productName = 'Fill & Finish';
            break;
        case 1.6:
            productName = 'Super Finish';
            break;
        default:
            productName = 'undefined product';
    }

    resultBucket = Math.ceil(resultKg / 20);
    resultKnauf.textContent = `Nombre de seaux nécessaires ${productName}: ${resultBucket} pcs`;
}
