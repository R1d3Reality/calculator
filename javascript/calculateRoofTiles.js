const inputLengthRoof = document.getElementById('length-roof');
const inputWidthRoof = document.getElementById('width-roof');
const inputDistanceRoof = document.getElementById('distance-roof');
const resultRoof = document.getElementById('result-roof-tiles');
const resultLathing = document.getElementById('result-roof-lathing');
const resultSlast = document.getElementById('result-roof-slast');

inputLengthRoof.addEventListener('input', calculateRoofTiles);
inputWidthRoof.addEventListener('input', calculateRoofTiles);
inputDistanceRoof.addEventListener('input', calculateRoofTiles);

function calculateRoofTiles () {
    const selectedElement = document.getElementById('roof-tiles');
    const selectedValue = parseFloat(selectedElement.value) || 0;

    const lengthValue = parseFloat(inputLengthRoof.value) || 0;
    const widthValue = parseFloat(inputWidthRoof.value) || 0;
    const distanceValue = parseFloat(inputDistanceRoof.value) || 0;

    const surfaceValue = Math.ceil(lengthValue * widthValue);

    let roofTilesPcs, lathingLm, slastLm;

    if (selectedValue === 0.345) {
        roofTilesPcs = Math.ceil(surfaceValue * 11.2);
    }
    if (selectedValue === 0.278) {
        roofTilesPcs = Math.ceil(surfaceValue * 18.6);
    }

    resultRoof.textContent = `Le nombre la tuile en terre cuite ${roofTilesPcs} pcs`;

    lathingLm = Math.ceil((widthValue / selectedValue) * lengthValue);
    resultLathing.textContent = `Nombre de mètres de lattes: ${lathingLm} lm`;

    slastLm = Math.ceil((lengthValue / (distanceValue / 100)) * widthValue);
    resultSlast.textContent = `Nombre de mètres de contre-lattes: ${slastLm} lm`;
}
