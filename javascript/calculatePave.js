const inputLengthPave = document.getElementById('pave-length');
const inputWidthPave = document.getElementById('pave-width');
const inputSurfacePave = document.getElementById('pave-surface');
const resultPave = document.getElementById('result-pave');

inputLengthPave.addEventListener('input', calculatePave);
inputWidthPave.addEventListener('input', calculatePave);
inputSurfacePave.addEventListener('input', calculatePave);


function calculatePave () {
    const valueLength = parseFloat(inputLengthPave.value) || 0;
    const valueWidth = parseFloat(inputWidthPave.value) || 0;
    const valueSurface = parseFloat(inputSurfacePave.value) || 0;


    const valuePave = Math.ceil (valueSurface / ((valueLength * valueWidth) / 10000));
    resultPave.textContent = `Nombre de paves nécessaire: ${valuePave} pcs`
}