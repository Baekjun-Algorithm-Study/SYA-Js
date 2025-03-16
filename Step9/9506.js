let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(var i = 0; i < input.length-1; i++){
    let num = Number(input[i]);
    let divisors = [];
    for(var j = 0; j <= num; j++){
        if(num % j == 0){
            divisors.push(j)
        }
    }
    let sum = 0;
    for(var k = 0; k < divisors.length; k++){
        if(divisors[k] != num){
            sum += divisors[k];
        }
    }
    if (sum === num) {
        console.log(num + " = " + divisors.filter(v => v !== num).join(" + "));
    }else {
        console.log(num + " is NOT perfect.")
    }
}