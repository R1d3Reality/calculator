//const for Concrete (Beton)
const surfaceInputConcrete = document.getElementById('surface-concrete');
const thickInputConcrete = document.getElementById('thick-concrete');

const resultConcrete = document.getElementById('result-concrete');
const resultConcreteInBag = document.getElementById('result-concrete-bag');

const resultConcreteCement = document.getElementById('result-concrete-cement');
const resultConcreteCement25 = document.getElementById('result-concrete-cement-bag-25');
const resultConcreteCement40 = document.getElementById('result-concrete-cement-bag-40');

const resultConcreteSand = document.getElementById('result-concrete-sand');
const resultConcreteSand25 = document.getElementById('result-concrete-sand-bag-25');
const resultConcreteSand40 = document.getElementById('result-concrete-sand-bag-40');

const resultConcreteGravel = document.getElementById('result-gravel');
const resultConcreteGravel25 = document.getElementById('result-gravel-bag-25');
const resultConcreteGravel40 = document.getElementById('result-gravel-bag-40');



surfaceInputConcrete.addEventListener('input', calculateResultConcrete);
thickInputConcrete.addEventListener('input', calculateResultConcrete);

function calculateResultConcrete() {
    const surfaceVolumeConcrete = parseFloat(surfaceInputConcrete.value) || 0;
    const thickVolumeConcrete = parseFloat(thickInputConcrete.value) || 0;
    const volumeValueConcrete = surfaceVolumeConcrete * (thickVolumeConcrete / 100);


    const valueConcrete = Math.round(((volumeValueConcrete * 1000) / 13) * 25);
    const valueConcreteInBag = Math.ceil(valueConcrete / 25);
    resultConcrete.textContent = `Quantité de beton: ${valueConcrete} Kg`;
    resultConcreteInBag.textContent = `Nombre de sacs de 25kg: ${valueConcreteInBag} pcs`;

    const valueCement = Math.ceil(volumeValueConcrete * 350);
    resultConcreteCement.textContent = `${valueCement} kg`
    const valueCementBag25 = Math.ceil(valueCement / 25);
    resultConcreteCement25.textContent = `Nombre de sacs de 25kg: ${valueCementBag25} pcs`;
    const valueCementBag40 = Math.ceil(valueCement / 40);
    resultConcreteCement40.textContent = `Nombre de sacs de 40kg: ${valueCementBag40} pcs`;

    const valueSand = Math.ceil(volumeValueConcrete * 800);
    resultConcreteSand.textContent = `${valueSand} kg`
    const valueSandBag25 = Math.ceil(valueSand / 25);
    resultConcreteSand25.textContent = `Nombre de sacs de 25kg: ${valueSandBag25} pcs`;
    const valueSandBag40 = Math.ceil(valueSand / 40);
    resultConcreteSand40.textContent = `Nombre de sacs de 40kg: ${valueCementBag40} pcs`;

    const valueGravel = Math.ceil(volumeValueConcrete * 1000);
    resultConcreteGravel.textContent = `${valueGravel} kg`;
    const valueGravelBag25 = Math.ceil(valueGravel / 25);
    resultConcreteGravel25.textContent = `Nombre de sacs de 25kg: ${valueGravelBag25} pcs`;
    const valueGravelBag40 = Math.ceil(valueGravel / 40);
    resultConcreteGravel40.textContent = `Nombre de sacs de 40kg: ${valueGravelBag40} pcs`;
}
