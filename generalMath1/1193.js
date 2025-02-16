let num = parseInt(input);
function getFraction(n){
    let row = 1, count = 1;

    while (count + row <= n){
        count += row;
        row++;
    }
 
    let col = n - count + 1;

    if (row % 2 == 1) {
        return `${row + 1 - col}/${col}`;
    } else {
        return `${col}/${row + 1 - col}`;
    }
}

console.log(getFraction(num)); 