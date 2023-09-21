//const for Faux Plafond
const widthInputCeiling = document.getElementById('ceiling-width');
const lengthInputCeiling = document.getElementById('ceiling-length');
const resultHolder = document.getElementById('result-holder');
const resultOutline = document.getElementById('result-outline');

const resultSuspension = document.getElementById('result-suspension');
const resultCavalier = document.getElementById('result-cavalier');


widthInputCeiling.addEventListener('input', calculateResultCeiling);
lengthInputCeiling.addEventListener('input', calculateResultCeiling);

function calculateResultCeiling () {
    const widthValueCeiling = parseFloat(widthInputCeiling.value) || 0;
    const lengthValueCeiling = parseFloat(lengthInputCeiling.value) || 0;

    const resultCeilingHolderLm = Math.floor(lengthValueCeiling / 0.6) * widthValueCeiling + Math.floor(widthValueCeiling / 0.6) * lengthValueCeiling;
    const resultCeilingOutlineLm = widthValueCeiling * 2 + lengthValueCeiling * 2;

    const resultSuspensionPcs = Math.round((lengthValueCeiling / 1.2) * (widthValueCeiling / 1.2));
    resultSuspension.textContent = `${resultSuspensionPcs} pcs`;

    const resultCavalierPcs = Math.round((lengthValueCeiling / 0.6) * (widthValueCeiling / 0.6));
    resultCavalier.textContent = `${resultCavalierPcs} pcs`



    resultHolder.textContent = `${resultCeilingHolderLm} Lm, ${Math.ceil(resultCeilingHolderLm / 4)} pcs`
    resultOutline.textContent = `${resultCeilingOutlineLm} Lm, ${Math.ceil(resultCeilingOutlineLm / 4)} pcs`;
}