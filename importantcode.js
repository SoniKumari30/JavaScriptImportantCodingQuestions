// Reverse of a string.

// let string = "soni"
// function revStr(str){
//   let reverse = ''
//   for(let i = 0; i < str.length;i++){
//       reverse = str[i] + reverse
//   }
// return reverse
// }
// console.log(revStr(string)) 


// Reverse of a number.

// let number = 123
// function revNum(num){
//   num = num + ""
// return num.split("").reverse().join("")
// }
// console.log(revNum(number)) 


// Remove duplicate from an array.

// let array = [1, 2, 2, 3, 4, 5, 6, 7, 5]
// function eliminateDuplicates(arr) {
//     let newArray = []
//     for (i = 0; i < arr.length; i++) {
//         if(!newArray.includes(arr[i])){  
//       newArray.push(arr[i]);  
//     } 
//     }
    
//      return newArray;
//   }
  
//   console.log(eliminateDuplicates(array))

  
// Remove duplicate from string.

// let string = "sonisoni"
// function eliminateDuplicates(str) {
//     let newStr = " "
//     for (i = 0; i < str.length; i++) {
//       if(newStr.indexOf(str[i])==-1){
//         newStr += str[i];
//     }
      
//     }
    
//      return newStr;
//   }
  
//   console.log(eliminateDuplicates(string))


// Palindrome String.

// let string = "madam"
// function palindrome(str) {
//   let len = str.length;
//   for (var i = 0; i < len/2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//         return "it is not a palindrome"
//     }
//   }
//   return "it is a palindrome"
//  }
//  console.log(palindrome(string))


// frequency counter.

// let array = [1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8]
// function countOccurrences(arr, x)
// {
//     let result = 0
//     for (let i=0; i<arr.length; i++)
//     {
//         if (x == arr[i])
//             result++
//     }
//     return result
// }
// console.log(countOccurrences(array, 8))


// Linear search.


// let array = [2, 9, 8, 3, 6]
// function linearSearch(arr, key){
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] === key){
//           return i
//       }
//   }
//   return -1
// }
// console.log(linearSearch(array, 3))


// Binary search.


// let array = [8, 9, 0, 3, 2, 6, 7]
// function binarySearch(list, item) {
//     let low = 0
//     let high = list.length - 1
  
//     while (low <= high) {
//       const mid = Math.floor((low + high) / 2)
//       const guess = list[mid]
  
//       if (guess === item) {
//         return mid
//       }
  
//       if (guess > item) {
//         high = mid - 1
//       } else {
//         low = mid + 1
//       }
//     }
  
//     return -1
//   }
  
// console.log(binarySearch(array, 7))


// Fibonacci Series


// let num = 4
// function fibonacci(number){
//   let n1 = 0, n2 = 1, nextTerm;

//   console.log('Fibonacci Series:');
  
//   for (let i = 1; i <= number; i++) {
//       console.log(n1);
//       nextTerm = n1 + n2;
//       n1 = n2;
//       n2 = nextTerm;
//   }
// }
// console.log(fibonacci(num))


// Find a max no in an array.


// let points = [40, 100, 1, 5, 25, 10]
// function myArrayMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }
// console.log(myArrayMax(points))


// Find a min no in an array.

// let points = [40, 100, 1, 5, 25, 10]
// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }
// console.log(myArrayMin(points))


// Difference between max-min.

// let points = [40, 100, 1, 5, 25, 10]
// function differenceMinMax(array) {

//   var arrayMin = array[0];
//   var arrayMax = array [0];

//   for  (var i=0; i <= array.length; i++) {

//   if (array[i] < arrayMin) {
//     arrayMin = array[i];
//   } 
//   if (array[i] > arrayMax) {
//     arrayMax = array[i];
//   }
//  }

//  return arrayMax - arrayMin;

//  }
//  console.log(differenceMinMax(points))


// Find a factorial of a no.

// let n = 5
// function factorial(n){
//   let answer = 1;
//   if (n == 0 || n == 1){
//     return answer;
//   }else{
//     for(var i = n; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
//   }  
// }
// console.log(factorial(n))


// Check a prime no.

// let number = 16
// function isPrime(num) {

//   if (num === 2) {
//     return true
//   } else if (num > 1) {
//     for (var i = 2; i < num; i++) {

//       if (num % i !== 0) {
//         return "no. is prime"
//       } else if (num === i * i) {
//         return false
//       } else {
//         return "no. is not a prime"
//       }
//     }
//   } else {
//     return false
//   }

// }

// console.log(isPrime(number))


//Find a prime no.

// function primeFactorsTo(max)
// {
//     var store  = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) 
//     {
//         if (!store [i]) 
//           {
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) 
//             {
//                 store[j] = true;
//             }
//         }
//     }
//     return primes;
// }

// console.log(primeFactorsTo(100))


// Sum of two no.

// function sumTriple (x, y) {
//     return (x + y)
//  }
// console.log(sumTriple(10, 20))


Sum of all digits.

let digit = 1234
function sumDigits(n) {
  let sum = 0;
  while (n) {
      digit = n % 10;
      sum += digit;
      n = (n - digit) / 10;
  }
  return sum;
}
console.log(sumDigits(digit))

Find duplicate.


let array= ['one',2,3,4,4,4,5,6,7,7,7,'pig','one']
function findDuplicates(arr) {
     let  out=[],
      counts={}

  for (var i=0; i<arr.length; i++) {
    var item = arr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1
    if (counts[item] === 2) {
      out.push(item)
    }
  }

  return out
}
console.log(findDuplicates(array))



   