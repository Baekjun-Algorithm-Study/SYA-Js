let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const points = input.map(line => line.trim().split(' ').map(Number));

const xList = points.map(p => p[0])
const yList = points.map(p => p[1])

function findFourthCoord(coordList){
    return coordList[0] === coordList[1] ? coordList[2]
    : coordList[0] === coordList[2] ? coordList[1]
    : coordList[0];
}

const x4 = findFourthCoord(xList);
const y4 = findFourthCoord(yList);

console.log(`${x4} ${y4}`);