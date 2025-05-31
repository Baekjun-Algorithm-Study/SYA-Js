let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(var i = 0; i < input.length; i++){

    let angle = input[i].split(' ').map(Number);
    let [x, y, z] = input[i].split(' ').map(Number);

    let max = Math.max(...angle);
    let maxIndex = angle.indexOf(max);
    let others = angle.slice(0, maxIndex).concat(angle.slice(maxIndex + 1));
    let sumWithoutMax = others.reduce((a, b) => a + b, 0);

    if (angle.every(n => n !== 0)) {
        if(max >= sumWithoutMax){
            console.log("Invalid")
        }else {
            if (new Set(angle).size === 1) {
                console.log("Equilateral")
            } else if (new Set(angle).size === 2) {
                console.log("Isosceles")
            } else if (new Set(angle).size === 3) {
                console.log("Scalene")
            }
        }

    }
}