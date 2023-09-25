const surfaceInputKnauf = document.getElementById('surface-knauf');

const resultKnauf = document.getElementById('result-knauf');

surfaceInputKnauf.addEventListener('input', calculateKnauf);
function calculateKnauf () {
    const selectedElement = document.getElementById('knauf');
    const selectedValue = parseFloat(selectedElement.value);

    const valueSurface = parseFloat(surfaceInputKnauf.value) || 0;

    const resultKg = Math.ceil(valueSurface / selectedValue);

    if (selectedValue === 0.3) {
        let resultBucket = Math.ceil(resultKg / 20)
        resultKnauf.textContent = `Nombre de seaux nécessaires Fill & Finish: ${resultBucket} pcs`;
    }
    if (selectedValue === 1.6 ) {
        let resultBucket = Math.ceil(resultKg / 20)
        resultKnauf.textContent = `Nombre de seaux nécessaires Super Finish: ${resultBucket} pcs`;
    }

}