// LHL Katas 

const sumLargestNumbers = function(data) {
  if(data.length < 2){
    return null;
  }
  let largestNum = data[0];
  let largestIndex = 0;
  let secondLargestNum = data[0];
  for(let i = 0; i < data.length; i++){
    if(data[i] > largestNum){
      largestNum = data[i];
      largestIndex = i;
    }
  }
  data.splice(largestIndex,1);
  for(let i = 0; i < data.length; i++){
    if(data[i] > secondLargestNum){
      secondLargestNum = data[i];
    }
  }
  return largestNum + secondLargestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
