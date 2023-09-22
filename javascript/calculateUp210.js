const surfaceUp210 = document.getElementById('surface-up210');
const resultUp210Kg = document.getElementById('result-up210-kg');
const resultUp210Bag = document.getElementById('result-up210-bag');

surfaceUp210.addEventListener('input', calculateUp210);
function calculateUp210 () {
    const selectElement = document.getElementById('knauf-up210');
    const selectedValue = selectElement.value;

    const valueSurfaceUp210 = parseFloat(surfaceUp210.value) || 0;

    const valueUp210Bag = Math.ceil(valueSurfaceUp210 /  selectedValue);
    resultUp210Bag.textContent = `Nombre de sacs de 25kg: ${valueUp210Bag} pcs`

    const valueUp210Kg = valueUp210Bag * 25;
    resultUp210Kg.textContent = `Quantité de Up210: ${valueUp210Kg} kg`

}