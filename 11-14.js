//function fizzBuzz(num = 30) {
  for (let i = 0; i < 30; i++);

  const isDivisibleBy3 = i % 3 === 0;
  const isDivisibleBy5 = i % 5 === 0;

  if (isDivisibleBy3) {
    console.log("Fizzy");
  } else if (isDivisibleBy5) {
    console.log("Buzz");
  } else if (isDivisibleBy3 && isDivisibleBy5) {
    console.log("Fizz Buzz");
  } else {
    console.log(fizzBuzz(30));
  }


function findLargest(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    } else {
      max = max;
    }
  }
  console.log(max);
}

findLargest([2, 3, 4, 45, 34, 6, 7, 8]);

function reverseString(text) {
  // text = "hello";
  return text.split("").reverse().join();
}
const result = reverseString("hello");
console.log(result);//

//count vowels
function countVowels() {
 
  let count = 0;

  const vowels = ["a", "e", "o", "u", "i"];
  const text = "javascript";
  
    for(let char of text){
       if (vowels.includes(char)) {
      count++;
    }  
    }
    
  }

  return count;


 console.log(countVowels());

