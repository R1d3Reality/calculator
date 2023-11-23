//const for Screed(Chape)
const surfaceInputScreed = document.getElementById('surface-screed');
const thickInputScreed = document.getElementById('thick-screed');
const resultInKgScreed = document.getElementById('result-screed')
const resultScreedKgInBag = document.getElementById('result-screed-bag');
const resultCement = document.getElementById('result-cement');
const resultSand = document.getElementById('result-sand');
const resultCementInBag25 = document.getElementById('result-cement-bag-25');
const resultSandInBag25 = document.getElementById('result-sand-bag-25');
const resultCementInBag40 = document.getElementById('result-cement-bag-40');
const resultSandInBag40 = document.getElementById('result-sand-bag-40');

surfaceInputScreed.addEventListener('input', calculateResultScreed);
thickInputScreed.addEventListener('input', calculateResultScreed);

function calculateResultScreed() {
    const surfaceValue = parseFloat(surfaceInputScreed.value) || 0;
    const thickValue = parseFloat(thickInputScreed.value) || 0;
    const resultScreed = surfaceValue * (thickValue * 16);
    const resultScreedInBag =Math.floor(resultScreed / 25);

    const volumeValue = (surfaceValue * thickValue) / 100;
    const cementValue = volumeValue * 250;

    const sandValue = volumeValue * 1500;

    resultInKgScreed.textContent = `Quantité de chape: ${resultScreed} Kg`;
    resultScreedKgInBag.textContent = `Nombre de sacs de 25kg: ${resultScreedInBag} pcs`;

    resultCement.textContent = `${Math.ceil(cementValue)} Kg`;
    resultCementInBag25.textContent = `Nombre de sacs de 25kg: ${Math.ceil(cementValue / 25)} pcs`;
    resultCementInBag40.textContent = `Nombre de sacs de 40kg: ${Math.ceil(cementValue / 40)} pcs`;

    resultSand.textContent = `${Math.ceil(sandValue)} Kg`
    resultSandInBag25.textContent = `Nombre de sacs de 25kg: ${Math.ceil(sandValue / 25)} pcs`
    resultSandInBag40.textContent = `Nombre de sacs de 40kg: ${Math.ceil(sandValue / 40)} pcs`

}
