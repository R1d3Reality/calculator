const windowInputFacade = document.getElementById('window-metres');

const isolationResult = document.getElementById('result-isolation');
const pinResult = document.getElementById('result-pin');
const discResult = document.getElementById('result-disc');

const plasterResult = document.getElementById('result-plaster');
const KS300Result = document.getElementById('result-KS300');
const KZW700Result = document.getElementById('result-KZW700');

const primerCrepiResult = document.getElementById('result-primer-crepi');
const crepiResult20= document.getElementById('result-crepi');
const crepiResult25 = document.getElementById('result-crepi-25');

const cornierVitoResult = document.getElementById('result-cornier-vito');
const cornierFacadeResult = document.getElementById('result-cornier-facade');
const soubResult = document.getElementById('result-soubassement');

const sigmaPrimer = document.getElementById('sigma-primer');
const sigmaTopcoat = document.getElementById('sigma-peinture');

const mapeiElastocolor = document.getElementById('mapei-peinture');

const victoriaPrimer = document.getElementById('victoria-primer');
const victoriaFacade = document.getElementById('victoria-facade');



document.getElementById('numberOfWalls').addEventListener('input', createInputs);

function createInputs() {
    const numberOfWalls = parseInt(this.value);
    const wallDimensionsDiv = document.getElementById('wallDimensions');

    wallDimensionsDiv.innerHTML = ''; // Очищуємо попередні введення

    for (let i = 1; i <= numberOfWalls; i++) {
        const wallDiv = document.createElement('div');

        wallDiv.innerHTML = `
          <label for="wall${i}Height">Taille du murs ${i}:</label>
          <input type="number" id="wall${i}Height" placeholder="Hauter (mètre)">
          <input type="number" id="wall${i}Width" placeholder="Largeur (mètre)">
        `;

        wallDimensionsDiv.appendChild(wallDiv);
    }
}


const PLATE_FOR_METER = 2;
const PIN_FOR_PLATE = 5;
const BAG_FOR_METER = 5;

document.getElementById('calculateButton').addEventListener('click', calculateArea)
function calculateArea() {
    const numberOfWalls = parseInt(document.getElementById('numberOfWalls').value);
    let totalArea = 0;
    let totalWidth = 0;
    let totalHeight = 0;
    for (let i = 1; i <= numberOfWalls; i++) {
        const wallHeight = parseFloat(document.getElementById(`wall${i}Height`).value);
        const wallWidth = parseFloat(document.getElementById(`wall${i}Width`).value);

        if (!isNaN(wallHeight) && !isNaN(wallWidth)) {
            totalArea += wallHeight * wallWidth;
            totalWidth +=  wallWidth;
            totalHeight += wallHeight;
        }
    }
    document.getElementById('result').textContent = `Total surface de facade: ${totalArea.toFixed(2)} m2`;


    // ISOLATION
    const platePcs = totalArea * PLATE_FOR_METER;
    const pinPcs = platePcs * PIN_FOR_PLATE;
    isolationResult.textContent = `Quantité d'isolation: ${platePcs} pcs`;
    pinResult.textContent = `Nombre de chevilles: ${pinPcs} pcs`;
    discResult.textContent = `Nombre de rondelles: ${pinPcs} pcs`;


    //Plaster Fabric
    const plasterFabric = Math.ceil(totalArea / 50);
    plasterResult.textContent = `Tissu-platre: ${plasterFabric} RL`;


    //Bag
    const bagKS300 = Math.ceil(totalArea / BAG_FOR_METER);
    const bagKZW700 = Math.ceil(totalArea / BAG_FOR_METER);
    KS300Result.textContent = `KS300 (collage de l'isolation): ${bagKS300} pcs`;
    KZW700Result.textContent = `KZW700 (l'encollage et finition):  ${bagKZW700} pcs`;


    //Crepi
    const primerCrepiBucket = Math.ceil(totalArea / 70);
    const crepiBucket = Math.ceil( totalArea / 7);
    const crepiBucket25 = Math.ceil(totalArea / 10);
    primerCrepiResult.textContent = `Quantite primer pour crepi: ${primerCrepiBucket} pcs`
    crepiResult20.textContent = `Quantite crepi en 20kg: ${crepiBucket} pcs`
    crepiResult25.textContent = `Quantite crepi en 25kg: ${crepiBucket25} pcs`


    //Cornier
    const windowMetres = parseFloat(windowInputFacade.value) || 0;
    const vitoPcs = Math.ceil(windowMetres / 3);
    let cornierFacade;
    switch (numberOfWalls) {
        case 1:
            cornierFacade = Math.ceil((totalHeight / 3) + (vitoPcs + 2));
            break;
        case 2:
            cornierFacade = Math.ceil((totalHeight / 3) + (vitoPcs + 3));
            break;
        case 3:
        case 4:
            Math.ceil((totalHeight / 3) + (vitoPcs + 4));
            break;
        default:
            cornierFacade = 0;
            break;
    }
    const soubPcs = Math.ceil(totalWidth / 2.5);
    cornierVitoResult.textContent = `Quantite profile vito avec gitex: ${vitoPcs} pcs`
    cornierFacadeResult.textContent = `Quantite cornier facade: ${cornierFacade} pcs`
    soubResult.textContent = `Quantite profile soubassement: ${soubPcs} pcs`

    //Peinture
    const sigmaPrimerPcs = Math.ceil(totalArea / 90);
    sigmaPrimer.textContent = `Primer Facade Aqua 10L: ${sigmaPrimerPcs} pcs`;
    const sigmaTopcoatPcs = Math.ceil(totalArea / 70);
    sigmaTopcoat.textContent = `Topcoat Satin 10L: ${sigmaTopcoatPcs} pcs`;

    const mapeiElastocolorPcs = Math.ceil(totalArea / 66);
    mapeiElastocolor.textContent = `Pittura Plus 20kg: ${mapeiElastocolorPcs} pcs`;

    const victoriaPrimFacadePcs = Math.ceil(totalArea / 90);
    victoriaPrimer.textContent = `Primer Facade: ${victoriaPrimFacadePcs} pcs`

    const victoriaFacadePcs = Math.ceil(totalArea / 80);
    victoriaFacade.textContent = `Peinture(Standard / Flexfill / Silicon): ${victoriaFacadePcs} pcs`;
}


