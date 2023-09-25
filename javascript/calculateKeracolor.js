const lengthInputTiles = document.getElementById('tiles-width');
const widthInputTiles = document.getElementById('tiles-width');
const thickInputTiles = document.getElementById('tiles-thick');
const widthInputJoint = document.getElementById('joint-width');
const surfaceInputKeracolor = document.getElementById('surface-keracolor');
const resultKeracolor = document.getElementById('result-keracolor');
lengthInputTiles.addEventListener('input', calculateKeracolor);
widthInputTiles.addEventListener('input', calculateKeracolor);
thickInputTiles.addEventListener('input', calculateKeracolor);
widthInputJoint.addEventListener('input', calculateKeracolor);
surfaceInputKeracolor.addEventListener('input', calculateKeracolor);

function calculateKeracolor () {
    const lengthValue = parseFloat(lengthInputTiles.value) || 0;
    const widthValue = parseFloat(widthInputTiles.value) || 0;
    const thickValue = parseFloat(thickInputTiles.value) || 0;
    const widthJointValue = parseFloat(widthInputJoint.value) || 0;
    const valueSurface = parseFloat(surfaceInputKeracolor.value) || 0;

    const result = ((lengthValue + widthValue) / (lengthValue * widthValue)) * thickValue * widthJointValue * 1.5;
    console.log(result);
    const resultInBag = Math.ceil((valueSurface * result) / 5);

    resultKeracolor.textContent = `Nombre de sacs de 5kg: ${resultInBag} pcs`


}
