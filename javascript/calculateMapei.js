const surfaceInputMapei = document.getElementById('surface-mapei');
const thickInputMapei = document.getElementById('thick-mapei');

const resultMapei = document.getElementById('result-mapei-bag');


surfaceInputMapei.addEventListener('input', calculateMapei);
thickInputMapei.addEventListener('input', calculateMapei);

function calculateMapei () {
    const selectedElement = document.getElementById('mapei');
    const selectedValue = parseFloat(selectedElement.value);

    const valueSurface = parseFloat(surfaceInputMapei.value) || 0;
    const valueThick = parseFloat(thickInputMapei.value) || 0;

    const resultMapeiBag = Math.ceil(valueSurface * (valueThick * selectedValue) / 25);
    resultMapei.textContent = `Nombre de sacs de 25kg: ${resultMapeiBag} pcs`;

}