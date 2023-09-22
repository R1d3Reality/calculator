
const inputSurfaceBloc = document.getElementById('surface-mur');
const resultMortier = document.getElementById('result-mortar-bag');

inputSurfaceBloc.addEventListener('input', getSelectedValue);


function getSelectedValue () {
    const selectElement = document.getElementById('bloc');
    const selectedValue = selectElement.value;


    const valueSurfaceBloc = parseFloat(inputSurfaceBloc.value) || 0;


    const resultBagMortar = Math.ceil(valueSurfaceBloc / (17 / selectedValue));

    resultMortier.textContent = `Nombre de sacs de 25kg: ${resultBagMortar} pcs`
}