const ceilingFalseWidth = document.getElementById('ceiling-false-width');
const ceilingFalseLength = document.getElementById('ceiling-false-length');

const resultFalseHolder = document.getElementById('result-false-holder');
const resultFalseOutline = document.getElementById('result-false-outline');
const resultSpace = document.getElementById('result-space');



ceilingFalseWidth.addEventListener('input', calculateRockfon);
ceilingFalseLength.addEventListener('input', calculateRockfon);



function calculateRockfon () {
    const selectElement = document.getElementById('rockfon');
    const selectedValue = selectElement.value;

    const resultFalseWidth = parseFloat(ceilingFalseWidth.value) || 0;
    const resultFalseLength = parseFloat(ceilingFalseLength.value) || 0;

    const resultCeilingOutline = 2 * resultFalseWidth + 2 * resultFalseLength;
    resultFalseOutline.textContent = `${resultCeilingOutline} lm`

    const resultCeilingHolderLm = (resultFalseWidth - 1) * resultFalseLength;
    resultFalseHolder.textContent = `${resultCeilingHolderLm} lm`;

    const resultCeilingSpaceLm = Math.floor(resultFalseLength / 0.6) * resultFalseWidth;
    resultSpace.textContent = `${resultCeilingSpaceLm} lm`;

    if (selectedValue === '0.36' ) {
        const resultCeilingSpaceSmall = resultCeilingSpaceLm + resultCeilingHolderLm;
        resultSpace.textContent = `${resultCeilingSpaceSmall} lm`;
    }
}