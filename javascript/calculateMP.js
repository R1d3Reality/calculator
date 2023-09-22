const inputSurfaceMp = document.getElementById('surface-mp');
const resultMp = document.getElementById('result-mp');
const resultMpKg = document.getElementById('result-mp-kg');

inputSurfaceMp.addEventListener('input', calculateResultMp);

function calculateResultMp () {
    const resultInputSurface = parseFloat(inputSurfaceMp.value) || 0;

    const resultMpBag = Math.round(resultInputSurface / 8);
    resultMp.textContent = `Nombre de sacs de 25kg: ${resultMpBag} pcs`;

    const resultMpInKg = Math.round(resultMpBag * 25);
    resultMpKg.textContent = `Quantité de produits: ${resultMpInKg} kg`
}