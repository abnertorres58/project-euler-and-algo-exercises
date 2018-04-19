var str = 'apple 1231111';
var mapChar = {};
var max = 0;
var c;


for(let char of str){
  if(mapChar[char]){
    mapChar[char]++;
  } else {
    mapChar[char] = 1;
  };
}
 for(let char in mapChar){

  if(mapChar[char] > max){
    max = mapChar[char]
    c = char;
  }
 }

 console.log(c)