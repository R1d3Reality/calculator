const inputLengthRoof = document.getElementById('length-roof');
const inputWidthRoof = document.getElementById('width-roof');
const inputDistanceRoof = document.getElementById('distance-roof');
const resultRoof = document.getElementById('result-roof-tiles');
const resultLathing = document.getElementById('result-roof-lathing');
const resultSlast = document.getElementById('result-roof-slast');

function calculateSurfaceValue(length, width) {
    return Math.ceil(length * width);
}

function calculateRoofTiles(surfaceValue, selectedValue) {
    const tileData = {
        0.345: 11.2,
        0.278: 18.6,
    };

    return Math.ceil(surfaceValue * tileData[selectedValue] || 0);
}

function calculateLathing(length, width, selectedValue) {
    return Math.ceil((width / selectedValue) * length);
}

function calculateSlast(length, distance) {
    return Math.ceil((length / (distance / 100)));
}

function validateInput(input) {
    const value = parseFloat(input.value);
    return !isNaN(value) && value > 0;
}

function calculateRoof() {
    if (!validateInput(inputLengthRoof) || !validateInput(inputWidthRoof) || !validateInput(inputDistanceRoof)) {
        alert('Please enter valid numeric values for length, width, and distance.');
        return;
    }

    const lengthValue = parseFloat(inputLengthRoof.value);
    const widthValue = parseFloat(inputWidthRoof.value);
    const distanceValue = parseFloat(inputDistanceRoof.value);
    const selectedValue = parseFloat(document.getElementById('roof-tiles').value) || 0;

    const surfaceValue = calculateSurfaceValue(lengthValue, widthValue);
    const roofTilesPcs = calculateRoofTiles(surfaceValue, selectedValue);
    const lathingLm = calculateLathing(lengthValue, widthValue, selectedValue);
    const slastLm = calculateSlast(lengthValue, distanceValue);

    resultRoof.textContent = `Le nombre de tuiles en terre cuite: ${roofTilesPcs} pcs`;
    resultLathing.textContent = `Nombre de mètres de lattes: ${lathingLm} lm`;
    resultSlast.textContent = `Nombre de mètres de contre-lattes: ${slastLm} lm`;
}

