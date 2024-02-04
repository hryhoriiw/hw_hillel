/*Один долар коштує 27 гривень. 
Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів*/


let startNumber = 10;
let endNumber = 100;
let exchangeRate = 27;


for (let i=startNumber; i <= endNumber ; i+=10 ) {
    let dlrToHrn = i*exchangeRate;
    console.log(`${i} долларів це ${dlrToHrn} гривень`);
}




































