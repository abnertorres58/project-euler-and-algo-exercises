//232792560
var number = 0;
// var divBy;
 var flag = true;
// var modEg0;
// var isEvenDivisable = 0;
// var n = 1;

// console.log(3%3);

// while (true){
//   number++;
//   modEg0 = 0;
//     for(divBy = 1; divBy <= 10; divBy++){
//     if(number % divBy === 0){
//       modEg0++;
//     }else {
//       break
//     }
//   }
//   if(modEg0 === 10){
//       console.log(number);
//       break
//   }
// }

// while(flag){
//   number++;
//   if ((number%2) === 0 && (number%3) === 0 && (number%4) === 0    && (number%5) === 0 && (number%6) === 0
//     && (number%7) === 0 && (number%8) === 0 && (number%9) === 0 && (number%10) === 0 && (number%11) === 0 && (number%12) === 0
//     && (number%13) === 0 && (number%14) === 0 && (number%15) === 0 && (number%16) === 0 && (number%17) === 0 && (number%18) === 0
//     && (number%19) === 0    && (number%20) === 0){
//     console.log(number);
//     flag = false;
//   }
// }



function isDidisible (number){

  for(var j = 2; j <= 20; j++){
    if(number % j !== 0){
      return false;
    }
  }
  return true;
}  


while(flag){
  number++;
  if (isDidisible(number)){
    console.log(number)
    flag = false;
  }
}