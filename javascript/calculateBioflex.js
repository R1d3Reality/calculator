const surfaceInputBioflex = document.getElementById('surface-kerakoll');
const thickInputBioflex = document.getElementById('thick-kerakoll');
const resultBag = document.getElementById('result-kerakoll');


surfaceInputBioflex.addEventListener('input', calculateBioflex);
thickInputBioflex.addEventListener('input', calculateBioflex);

function calculateBioflex() {
    const surfaceValue = parseFloat(surfaceInputBioflex.value);
    const thickValue = parseFloat(thickInputBioflex.value);


    if (isNaN(surfaceValue) || isNaN(thickValue) || surfaceValue <= 0 || thickValue <= 0) {
        resultBag.textContent = 'Veuillez entrer des valeurs valides.';
        return;
    }

    const bagsNeeded = Math.ceil((surfaceValue * thickValue * 0.625) / 25);
    resultBag.textContent = `Nombre de sacs de 25kg nécessaires : ${bagsNeeded} pcs`;
}
