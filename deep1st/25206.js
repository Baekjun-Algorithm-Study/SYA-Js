let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let totalScore = 0;
let totalCredit = 0;

for(var i = 0; i < input.length; i++){
        const[, credit, rank] = input[i].split(" ");
        if(rank !== "P"){  
            const numCredit = parseFloat(credit);
            totalCredit += numCredit;
            const ranks = {
                "A+":4.5,
                "A0":4.0,
                "B+":3.5,
                "B0":3.0,
                "C+":2.5,
                "C0":2.0,
                "D+":1.5,
                "D0":1.0,
                "F":0.0
            };
            totalScore += numCredit*ranks[rank];
        }
}

let majorScore = totalScore/totalCredit;
console.log(majorScore.toFixed(6));