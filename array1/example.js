const fs = require('fs');
const path = require('path');

/* 집에서 풀 때*/
let input1 = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

/* 체점 할 때 */
let input2 = require('fs').readFileSync('/dev/stdin').toString().split('\n');