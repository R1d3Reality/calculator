// Отримайте посилання на обидва <select> елементи
const colorSelect = document.getElementById('colorSelect');
const modelSelect = document.getElementById('modelSelect');
const surfaceInputBrick = document.getElementById('surface-brick');
const resultBrick = document.getElementById('result-brick')
const resultBrick5 = document.getElementById('result-brick5');

colorSelect.addEventListener('change', updateModelSelect, calculateBrick);
modelSelect.addEventListener('change', calculateBrick);
surfaceInputBrick.addEventListener('input', calculateBrick);

const modelsByColor = {
    GrisAgate: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valuerFor5: 83, palPcs: 1014 },
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 780 },
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    NoirGraphite: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1014 },
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 780 },
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    BlancBouillard: [
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 }
    ],
    SuperBlanc: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 780 },
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    GrisTitane: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1014}
    ],
    BlancIvoire: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 780 },
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    GrisArgente: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1014 },
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 780 },
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648},
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    Castana: [
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 }
    ],
    BeigeDuna: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1014 },
    ],
    GrisMisto: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1014 }
    ],
    BlancPuro: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5:85, palPcs: 1014 }
    ],
    GrisRino: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1014 }
    ],
    Rubino: [
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5:83, palPcs: 648 }
    ],
    GrisSilvo: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1014 }
    ],
    Zafferano: [
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648}
    ],
    RougeCandy: [
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 900 }
    ],
    JauneCorn: [
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 900 }
    ],
    GrisMoon: [
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 840 }
    ],
    GrisArgos: [
        { name: 'Eco-brick 385 x 70 x 40', value: 49, valueFor5: 57, palPcs: 360 }
    ],
    BrunBarn: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 880 }
    ],
    GrisByblos: [
        { name: 'Eco-brick 385 x 70 x 40', value: 49, valueFor5: 57, palPcs: 360 }
    ],
    GrisFrost: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 1000 },
        { name: 'Eco-brick 400 x 65 x 40', value: 47, valueFor5: 55, palPcs: 360 }
    ],
    BlancNemo: [
        { name: 'Eco-brick 400 x 65 x 40', value: 47, valueFor5: 55, palPcs: 360 }
    ],
    BeigeTilis: [
        { name: 'Eco-brick 385 x 70 x 40', value: 49, valueFor5: 57, palPcs: 360 }
    ],
    BeigeTornis: [
        { name: 'Eco-brick 385 x 70 x 40', value: 49, valueFor5: 58, palPcs: 360 }
    ],
    JauneVegas: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 880 },
        { name: 'Eco-brick 400 x 65 x 40', value: 47, valueFor5: 55, palPcs: 360 }
    ],
    Colorada: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 850 }
    ],
    Hectic: [
        { name: 'WF 217 x 103 x 51', value: 70, valueFor5: 81, palPcs: 520 }
    ],
    MaaseikerBont: [
        { name: 'Klampformaat 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 880 },
        { name: 'VF 210 x 100 x 43', value: 82, valueFor5: 97, palPcs: 630 },
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 630 },
        { name: 'WDF 210 x 100 x 65', value: 59, valueFor5: 67, palPcs: 450 }
    ],
    BleuMauveEscarbille: [
        { name: 'Klampformaat 176 x 82 x 47', value: 91, valueFor5: 107, palPcs: 880 },
        { name: 'VF 207  x 98 x 43', value: 84, valueFor5: 99, palPcs: 630 },
        { name: 'WF 207 x 98 x 50', value: 74, valueFor5: 86, palPcs: 630 },
        { name: 'WDF 209 x 98 x 65', value: 59, valueFor5: 67, palPcs: 450 }
    ],
    VeldbrandAntique: [
        { name: 'WF 208 x 98 x 50', value: 74, valueFor5: 86, palPcs: 630 },
        { name: 'WDF 210 x 100 x 65', value: 59, valueFor5: 67, palPcs: 450 }
    ],
    VeldbrandExterieur: [
        { name: 'WF 207 x 95 x 50', value: 74, valueFor5: 86, palPcs: 630 },
        { name: 'WDF 208 x 98 x 65', value: 60, valueFor5: 68, palPcs: 450 }
    ],
    RougeJado: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 }
    ],
    JauneMuria: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5:83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 }
    ],
    GreigeNila: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 }
    ],
    GrisRemo: [
        { name: 'Eco-brick 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 }
    ],
    GreigeSalina: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1100 }
    ],
    NeroNoirManganese: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5:83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 }
    ],
    Paepesteen: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    Plaza: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904},
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 660 }
    ],
    RougeEspagnol: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 },
    ],
    FleurDePaille: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 660 }
    ],
    DeDurbuy: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 540 },
    ],
    DeLiege: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 600 },
    ],
    DeMons: [
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 800 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 600 }
    ],
    DeNamur: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 600 }
    ],
    RougePerforations: [
        { name: 'M65 188 x 88 x 63', value: 67, valueFor5: 77, palPcs: 700 },
        { name: 'M90 188 x 88 x 88', value: 50, valueFor5: 56, palPcs: 500 }
    ],
    RougePlein: [
        { name: 'M65 188 x 88 x 63', value: 67, valueFor5: 77, palPcs: 700 }
    ],
    Rouge: [
        { name: '400 x 95 x 48', value: 41, valueFor5: 47, palPcs: 256 },
    ],
    CassiaNoirGraphite: [
        { name: '400 x 95 x 48', value: 41, valueFor5: 47, palPcs: 256 }
    ],
    Alverna: [
        { name: 'WF 209 x 97 x 50', value: 73, valueFor5: 85, palPcs: 864 },
    ],
    BlauwRoodGenuanceerd: [
        { name: 'HF 228 x 108 40', value: 81, valueFor5: 96, palPcs: 824 },
        { name: 'WF 209 x 100 x 500', value: 73, valueFor5: 85, palPcs: 376 },
        { name: 'WDF 213 x 101 x 65', value: 58, valueFor5: 66, palPcs: 552 }
    ],
    BlauwRoodGenuanceerdGesinterd: [
        { name: 'HF 228 x 108 x 40', value: 81, valueFor5: 96, palPcs: 824 }
    ],
    BronzeRustique: [
        { name: 'WF 210 x 100 x 51', value: 72, valueFor5: 84, palPcs: 376 },
        { name: 'WDF 213 x 101 x 65', value: 58, valueFor5: 66, palPcs: 552 }
    ],
    DYpres: [
        { name: '288 x 88 x 88', value: 34, valueFor5: 37, palPcs: 432 }
    ],
    DeCampine: [
        { name: 'M65 188 x 88 x 63', value: 67, valueFor5: 77, palPcs: 660 }
    ],
    LisseDeCampine: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 840 },
        { name: 'M65 188 x 88 x 63', value: 67, valueFor5: 77, palPcs: 660 },
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 840 }
    ],
    NuanceeDeCampine: [
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 840 }
    ],
    EcorceSableeDeCampine: [
        { name: 'M65 188 x 88 x 63', value: 67, valueFor5: 77, palPcs: 660 }
    ],
    RougeWanlin: [
        { name: 'M65 188 x 88 x 63', value: 67, valueFor5: 77, palPcs: 845 },
        { name: '288 x 88 x 88', value: 34, valueFor5: 37, palPcs: 432 }
    ],
    CasaLena: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 1040 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 640},
    ],
    Colombe: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 950}
    ],
    BlancArctice: [
        { name: '288 x 90 48', value: 56, valueFor5: 65, palPcs: 804 },
        { name: 'Eco-brick 288 x 65 x 48', value: 56, valueFor5: 65, palPcs: 938 }
    ],
    Betula: [
        { name: '288 x 90 x 48', value: 56, palPcs: 904 },
        { name: 'Eco-brick 288 x 65 x 48', value: 56, valueFor5:65, palPcs: 938 }
    ],
    GrisMagma: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804 },
        { name: 'Eco-brick 288 x 65 x 48', value: 56, valueFor5: 65, palPcs: 938 }
    ],
    GrisNebula: [
        { name: '288 x 90 x 48', value: 56, palPcs: 804},
        { name: 'Eco-brick 288 x 65 x 48', value: 56, valueFor5: 65,palPcs: 938}
    ],
    BlancNordica: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804 },
        { name: 'Eco-brick 288 x 65 x 48', value: 56, valueFor5: 65, palPcs: 938 },
    ],
    Robinia: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804 },
        { name: 'Eco-brick 288 x 65 x 48', value: 56, valueFor5: 65, palPcs: 938 }
    ],
    GreigeSilva: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804},
        { name: 'Eco-brick 288 x 65 x 48', value: 56, valueFor5: 65, palPcs: 938 }
    ],
    NoirWenga: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804 },
        { name: 'Eco-brick 288x 65 x 48', value: 56, valueFor5: 65, palPcs: 938 }
    ],
    Branco: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    Pampas: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1248 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 },
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    Prata: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1014 },
        { name: 'WF 215 x 102 x 50', value: 72, valueFor5: 83, palPcs: 648 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    PrataNuance: [
        { name: 'Eco-brick 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1014 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    Bleu: [
        { name: 'Panneresse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480 },
        { name: 'Panneresse + Boutisse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480}
    ],
    Jaune: [
        { name: 'Panneresse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480 },
        { name: 'Panneresse + Boutisse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480}
    ],
    Vert: [
        { name: 'Panneresse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480 },
        { name: 'Panneresse + Boutisse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480}
    ],
    RougeEmaillees: [
        { name: 'Panneresse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480 },
        { name: 'Panneresse + Boutisse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480}
    ],
    Blanc: [
        { name: 'Panneresse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480 },
        { name: 'Panneresse + Boutisse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480}
    ],
    Noir: [
        { name: 'Panneresse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480 },
        { name: 'Panneresse + Boutisse 210 x 99 x 51', value: 72, valueFor5: 84, palPcs: 480}
    ],
    Andalucia: [
        { name: 'WF 209 x 100 x 50', value: 73, valueFor5: 85, palPcs: 376 }
    ],
    Asturia: [
        { name: 'WF 209 x 100 x 50', value: 73, valueFor5: 85, palPcs: 376 }
    ],
    Catalunya: [
        { name: 'WF 209 x 100 x 50', value: 73, valueFor5: 85, palPcs: 376 }
    ],
    Galicia: [
        { name: 'WF 209 x 100 x 50', value: 73, valueFor5: 85, palPcs: 376 }
    ],
    Navarra: [
        { name: 'WF 209 x 100 x 50', value: 73, valueFor5: 85, palPcs: 376 }
    ],
    Albius: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 847},
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, valueFor5: 92, palPcs: 1210 }
    ],
    Flavius: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 847 },
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, valueFor5: 92, palPcs: 1210 }
    ],
    Nerus: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 847 },
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, valueFor5: 92, palPcs: 1210 }
    ],
    Notus: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 847 },
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, palPcs: 1210 }
    ],
    Vino: [
        { name: '256 x 90 x 43', value: 68, valueFor5: 80, palPcs: 715 },
    ],
    Viola: [
        { name: '256 x 90 x 43', value: 68, valueFor5: 80, palPcs: 715}
    ],
    BrunExtra: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804 }
    ],
    Etouffe: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 516 }
    ],
    EtouffeExtra: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 516 }
    ],
    MoronoRouge: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804 }
    ],
    RougeExtra: [
        { name: '288 x 90 x 48', value: 56, valueFor5: 65, palPcs: 804 }
    ],
    RougeAtrium: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 990 }
    ],
    RougeAula: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 990 }
    ],
    BrunCivitas: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 990 }
    ],
    NoirColonia: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 990 }
    ],
    BlancDover: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 880 }
    ],
    GrisSonic: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 880 }
    ],
    BrunUrbis: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 990 }
    ],
    NoirVesta: [
        { name: 'Eco-brick 240 x 65 x 40', value: 77, valueFor5: 91, palPcs: 990 }
    ],
    CosmosExclusief: [
        { name: 'WF 211 x 100 x 50', value: 73, valueFor5: 85, palPcs: 396 }
    ],
    Goudsbloem: [
        { name: 'WF 209 x 100 x 49', value: 75, valueFor5: 87, palPcs: 400 }
    ],
    Hoorbloem: [
        { name: 'WF 212 x 100 x 50', value: 72, valueFor5: 84, palPcs: 400 }
    ],
    Kogelbloem: [
        { name: 'WF 210 x 101 x 49', value: 74, valueFor5: 87, palPcs: 400 },
        { name: 'WDF 213 x 102 x 65', value: 58, valueFor5: 66, palPcs: 624 }
    ],
    Passiebloem: [
        { name: 'WF 211 x 101 x 49', value: 74, valueFor5: 86, palPcs: 400 },
        { name: 'WDF 213 x 102 x 65', value: 58, valueFor5: 66, palPcs: 624 }
    ],
    GreigeClarus: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1120 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 840 }
    ],
    BlancHelios: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1260 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 880 }
    ],
    GrisSaturn: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1120 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 840 }
    ],
    GreigeSratus: [
        { name: 'Eco-brick WF 210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1100 },
    ],
    BeigeVelum: [
        { name: '210 x 65 x 50', value: 73, valueFor5: 85, palPcs: 1100 }
    ],
    Brun: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 1072 }
    ],
    BrunNoir: [
        { name: 'Eco-brick 238 x 75 x 48', valueFor5: 78, palPcs: 1072 },
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 840 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 660 }
    ],
    RougeFonce: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 660 }
    ],
    Gris: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 1072 },
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 840 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 660}
    ],
    GrisNoir: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 1072 },
        { name: 'WF 210 x 100 x 50', value: 73, valueFor5: 85, palPcs: 840 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 660 }
    ],
    Pourpre: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 1072 }
    ],
    RougeBrun: [
        { name: 'Eco-brick lluzo 238 x 75 x 48', valueFor5: 78, palPcs: 1072 }
    ],
    FleurDePommier: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 680 }
    ],
    Barok83: [
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 628 }
    ],
    NeoRomaans: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 628 }
    ],
    Opus: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 528 }
    ],
    VieuxRieme: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 660 }
    ],
    VieuxRomaans: [
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 904 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 628 }
    ],
    Pastorale: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 780 }
    ],
    Renaissance: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 680 }
    ],
    BalenseRecup: [
        { name: 'Eco-brick WF 200 x 65 x 48', value: 79, valueFor5: 93, palPcs: 924 }
    ],
    BoomseRecup: [
        { name: 'Eco-brick M65 188 x 65 x 63', value: 67, valueFor5: 77, palPcs: 756 },
    ],
    BrabantseRecup: [
        { name: 'Eco-brick M65 188 x 65 x 63', value: 67, valueFor5: 77, palPcs: 756 },
    ],
    DesselseRecup: [
        { name: 'Eco-brcik WF 200 x 65 x 48', value: 79, valueFor5: 93, palPcs: 924 },
    ],
    MaalbergseRV: [
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 },
        { name: 'Avec faux joints 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 }
    ],
    MeerseRecup: [
        { name: 'Eco-brick WF 200 x 65 x 48', value: 79, valueFor5: 93, palPcs: 924 },
    ],
    MolenlandseRV: [
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 },
        { name: 'Avec faux joints 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 }
    ],
    OlenseRecup: [
        { name: 'Eco-brick WF 200 x 65 x 48', value: 79, valueFor5: 93, palPcs: 924 }
    ],
    RodelandseRV: [
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 },
        { name: 'Avec faux joints 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 }
    ],
    RupelseRV: [
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 },
        { name: 'Avec faux joints 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 }
    ],
    TongerseRV: [
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 },
        { name: 'Avec faux joints 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 }
    ],
    ZevendonskeRV: [
        { name: 'Rijnvorm 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 },
        { name: 'Avec faux joints 178 x 83 x 48', value: 88, valueFor5: 104, palPcs: 660 }
    ],
    Lautrec: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 936 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 600 }
    ],
    Pastorie: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 936 }
    ],
    Tiffany: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 936 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 600 }
    ],
    OudBachte: [
        { name: 'Eco-brick WF 215 x 65 x 50', value: 72, valueFor5: 83, palPcs: 1100 },
        { name: 'Eco-brick WDF 215 x 65 x 65', value: 58, valueFor5: 65, palPcs: 850 }
    ],
    OudDamme: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 600}
    ],
    OudKempisch: [
        { name: 'M50 188 x 88 x 48', value: 84,valueFor5: 98, palPcs: 920 },
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 540 }
    ],
    OudMalle: [
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 540 }
    ],
    OudeVeldsteen: [
        { name: 'M50 188 x 88 x 48', value: 84, valueFor5: 98, palPcs: 936},
        { name: 'WDF 215 x 102 x 65', value: 58, valueFor5: 65, palPcs: 600}
    ],
    GrisJade: [
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, valueFor5: 92, palPcs: 1204 }
    ],
    PourpreMaya: [
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, valueFor5: 92, palPcs: 1204 }
    ],
    JauneMint: [
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, valueFor5: 92, palPcs: 1204 }
    ],
    GrisTan: [
        { name: 'Eco-brick RF 238 x 75 x 40', value: 77, valueFor5: 92, palPcs: 1204 }
    ],
    BlancAlaska: [
        { name: 'Eco-brick 380 x 70 x 45', value: 45, valueFor5: 52, palPcs: 414 }
    ],
    RougeAtica: [
        { name: 'Eco-brick 370 x 70 x 40', value: 51, valueFor5: 60, palPcs: 414 }
    ],
    Ecru: [
        { name: '510 x 100 40', value: 37, valueFor5: 44, palPcs: 245 }
    ],
    GrisGloom: [
        { name: 'Eco-brick 380 x 70 x 45', value: 45, valueFor5: 52, palPcs: 414 }
    ],
    WasserstrichGris: [
        { name: '510 x 100 x 40', value: 37, valueFor5: 44, palPcs: 245},
    ],
    RougeCarmin: [
        { name: '495 x 100 x 38', value: 40, valueFor5: 47, palPcs: 245 }
    ],
    GrisQuartz: [
        { name: '510 x 100 x 40', value: 37, valueFor5: 44, palPcs: 245 }
    ],
    RougeOrient: [
        { name: '500 x 100 x 38', value: 40, valueFor5: 47, palPcs: 245 }
    ],
    WasserstrichRouge: [
        { name: '495 x 100 x 38', value: 40, valueFor5: 47, palPcs: 245 }
    ],
    Sable: [
        { name: '510 x 100 x 40', value: 37, valueFor5: 44, palPcs: 245}
    ],
    GrisSilt: [
        { name: 'Eco-brick 380 x 70 x 45', value: 45, valueFor5: 52, palPcs: 414 }
    ],
    GrisSuria: [
        { name: 'Eco-brick 380 x 70 x 45', value: 45, valueFor5: 52, palPcs: 414 }
    ],
    BlancVanille: [
        { name: 'Eco-brick 380 x 70 x 45', value: 45, valueFor5: 52, palPcs: 414 }
    ],
    NoirDeVolcan: [
        { name: '495 x 100 x 38', value: 40, valueFor5: 47, palPcs: 245 }
    ],
    WasserstrichNoir: [
        { name: '495 x 100 x 38', value: 40, valueFor5: 47, palPcs: 245 }
    ]
};

function updateModelSelect() {
    const selectedColor = colorSelect.value;
    modelSelect.innerHTML = '';

    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = 'Sélectionnez la taille de la brique';
    emptyOption.disabled = true;
    emptyOption.selected = true;
    modelSelect.appendChild(emptyOption);

    modelsByColor[selectedColor].forEach((model) => {
        const option = document.createElement('option');
        if (typeof model === 'object') {
            option.value = model.value;
            option.textContent = model.name;
        }
        modelSelect.appendChild(option);
    });
}

function calculateBrick() {
    const selectedIndex = modelSelect.selectedIndex;
    const selectedValue = modelsByColor[colorSelect.value][selectedIndex]?.value
        || modelsByColor[colorSelect.value][0]?.value;
    const selectedValueFor5 = modelsByColor[colorSelect.value][selectedIndex]?.valueFor5
        || modelsByColor[colorSelect.value][0]?.valueFor5;
    const selectedPal = modelsByColor[colorSelect.value][selectedIndex]?.palPcs
        || modelsByColor[colorSelect.value][0]?.palPcs;

    const surfaceValue = parseFloat(surfaceInputBrick.value) || 0;

    const resultBrickPcs = Math.ceil(surfaceValue * selectedValue);
    const resultPal = Math.ceil(resultBrickPcs/ selectedPal);
    resultBrick.textContent = `Pour joint 12mm: nombre de pièces: ${resultBrickPcs}, nombre de palettes ${resultPal}`;

    const resultBrick5Pcs = Math.ceil(surfaceValue * selectedValueFor5);
    const resultPal5 = Math.ceil(resultBrick5Pcs / selectedPal);
    resultBrick5.textContent = `Pour joint 5
    mm: nombre de pièces: ${resultBrick5Pcs}, nombre de palettes ${resultPal5}`




}


updateModelSelect();


