// function miniMaxSum(arr) {   

//     var arrClone1 = arr.slice() 
//     var arrClone2 = arr.slice() 
  
//     var arrMinor = arrClone1.sort(function(a, b){return a - b;})
//     arrMinor.pop()
  
//     var arrMajor = arrClone2.sort(function(a, b){return b - a;})
//     arrMajor.pop()
  
//     function getSum(a, b) {
//       return a + b;
//     }
  
//     var result1 = arrMinor.reduce(getSum) 
//     var result2 = arrMajor.reduce(getSum)    
  
//     console.log(`${result1} ${result2}`) // it is returning: 10 14 
// }
// let arr = [1,20,3,4,5];
// miniMaxSum(arr);

function miniMaxSum(arr) {
  arr.sort()
  let minimum = 0;
  let maximun = 0;

  for (let i=0; i< arr.length -1; i++){
    minimum += arr[i]
}
  for (let j=1; j< arr.length; j++){
      maximun += arr[j]
  }
  
  // console.log(`${minimum} ${maximun}`)  
  console.log(minimum , maximun);
  // return [minimum , maximun];
}
let arr = [1,2,3,4,5];
// console.log(miniMaxSum(arr));
miniMaxSum(arr);