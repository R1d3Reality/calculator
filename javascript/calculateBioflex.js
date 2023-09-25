const surfaceInputBioflex = document.getElementById('surface-kerakoll');
const thickInputBioflex = document.getElementById('thick-kerakoll');
const resultBag = document.getElementById('result-kerakoll');

surfaceInputBioflex.addEventListener('input', calculateBioflex);
thickInputBioflex.addEventListener('input', calculateBioflex);

function calculateBioflex () {
    const surfaceValue = parseFloat(surfaceInputBioflex.value) || 0;
    const thickValue = parseFloat(thickInputBioflex.value) || 0;

    const resultInBag = Math.ceil((surfaceValue * thickValue * 0.625) / 25);
    resultBag.textContent = `Nombre de sacs de 25kg: ${resultInBag} pcs`
}