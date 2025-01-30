let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var caseNum = Number(input);
var defaultNum = Math.pow(Math.pow(2, caseNum-1)+1, 2);
var centerPoint = Math.pow(4, caseNum-1);
var midPoint = (Math.pow(2, caseNum-1) * (Math.pow(2, caseNum-1)+1))*2 
var result = defaultNum + centerPoint + midPoint;
console.log(result);