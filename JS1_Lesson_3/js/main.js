let i = 0;
do {
    if (i == 0){
        console.log(`${i} - это ноль`);
    }
    if (i % 2 == 0 && i !== 0){
        console.log(`${i} - это четное число`)
    }
    if (i % 2 == 1){
        console.log(`${i} - это нечетное число`)
    }
    i++;
}while (i < 11);


for (i=0 ; i<9 ; i++ , console.log(i)){}



let elochka = '';
for (i=0 ; i <20 ; i++ ){
    elochka = elochka + 'x';
    console.log(elochka)
}


let i = 0;
while (i<100){
    if ((i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && i%7 !== 0)||
        (i === 2 || i === 3 || i === 7 || i === 5)){
        console.log(i)
    }
    i++
}

const arr = [
    [2,4,6],
    [1,5,10],
    [7,4,1],
];
let score = 0 ;
function summary(arr) {
    for (i = 0; i < arr.length; i++){
        let sumArr = 0;
        let arrToArr = arr[i];
        for ( j = 0;j< arrToArr.length;j++){
            sumArr += arrToArr[j];
        }
        console.log(sumArr);
        if (score < sumArr){
            score = sumArr;
        }
    }
}
console.log(summary(arr));
console.log(score);