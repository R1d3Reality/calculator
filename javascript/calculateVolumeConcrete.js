const volumeInputConcrete = document.getElementById('volume-beton');
const resultInKgConcrete = document.getElementById('result-concrete-volume');
const resultInBagConcrete = document.getElementById('result-concrete-volume-bag');

volumeInputConcrete.addEventListener('input', calculateVolumeConcrete);


function calculateVolumeConcrete () {
    const volumeValue = parseFloat(volumeInputConcrete.value) || 0;
    const resultConcreteKg = Math.round(((volumeValue * 1000) / 13) * 25);
    const resultConcreteInBagKg = Math.round(resultConcreteKg / 25);
    resultInKgConcrete.textContent = `Quantité de beton: ${resultConcreteKg} KG`;
    resultInBagConcrete.textContent = `Nombre de sacs de 25kg: ${resultConcreteInBagKg} pcs`;

}