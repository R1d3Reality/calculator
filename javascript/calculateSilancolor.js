const surfaceInputSilancolor = document.getElementById('surface-silancolor');

const resultSilancolor = document.getElementById('result-silancolor');

surfaceInputSilancolor.addEventListener('input', calculateSilancolor);

function calculateSilancolor () {
    const selectedElement = document.getElementById('silancolor');
    const selectedValue = parseFloat(selectedElement.value);

    const valueSurface = parseFloat(surfaceInputSilancolor.value) || 0;

    const resultSilancolorInBucket = Math.ceil(valueSurface /(20 / selectedValue));
    resultSilancolor.textContent = `Nombre de seaux nécessaires: ${resultSilancolorInBucket}`
}