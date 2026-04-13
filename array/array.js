// 1. Array syntax
let arr = [1,2,3,4,5,6]

//check array length
console.log(arr.length);

//accessing array elements
console.log(arr[0]);
console.log(arr[1]);

// 2. Array methods
arr.push(7);
arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

// 3. Array constructor
let ar1 = new Array(5);
ar1[0] = 1;

// 4. Array iteration
let cde = [1,2,3,4,5];
for(let i=0;i<cde.length;i++){
    console.log(cde[i]);
}

// 5. Array manipulation
let cde1 = [1,2,3,4,5];
let maxEle = cde1[0];
for(let i=1;i<cde1.length;i++){
    if(cde1[i]>maxEle){
        maxEle = cde1[i];
    }
}
console.log(maxEle,'maximum element in array');

// 6.sorting an array
let cde2 = [5,3,1,4,2];
cde2.sort((a,b) => a-b);
console.log(cde2,'sorted array');


// 7.remove duplicates from array
let cde3 = [1,2,2,3,4,4,5];
let uniqueArr = [...new Set(cde3)];
console.log(uniqueArr,'array with duplicates removed');


// 8. add element to array at specific index
const arrEle = [1,2,4,5,6];
let insertNumber = 3;
let position = 5;
for(let i=arr.length;i>position;i--){
 arr[i] = arr[i-1]   
}
arr[position] = insertNumber;
console.log(arr,'array after adding element at specific index');

// 9. remove element from array at specific index
const arrEle1 = [1,2,3,4,5];
let removePosition = 2;
for(let i=removePosition;i<arrEle1.length-1;i++){
    arrEle1[i] = arrEle1[i+1];
}
arrEle1.length = arrEle1.length - 1;
console.log(arrEle1,'array after removing element at specific index');


// 10. check variable is array or not
let variable = [1,2,3];
if(Array.isArray(variable)){
    console.log('variable is an  array');
}else{
    console.log('variable is not an array');
}



// 11. copy an array
let originalArray = [1,2,3,4,5];
let copiedArray = [...originalArray];
console.log(copiedArray,'copied array');

// 12. concatenate two arrays
let array1 = [1,2,3];
let array2 = [4,5,6];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray,'concatenated array');


// 12. reverse an array
let array3 = [1,2,3,4,5];
array3.reverse();
console.log(array3,'reversed array');


// 13. find index of element in array
let array4 = [1,2,3,4,5];
let elementToFind = 3;
let index = array4.indexOf(elementToFind);
if(index !== -1){
    console.log(`Element ${elementToFind} found at index ${index}`);
}else{
    console.log(`Element ${elementToFind} not found in array`);
}

// 14.Sort a arr in ascending order
let array5 = [5,3,1,4,2];

//method 1
array5.sort((a,b) => a-b);
console.log(array5,'sorted array in ascending order');

//using for loop
const arr = [23,43,56,10,5,7];
for(let i = 0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr,'arr');


// 15. Sort an array in descending order
let array6 = [5,3,1,4,2];

//method 1
array6.sort((a,b) => b-a);
console.log(array6,'sorted array in descending order');

//using for loop
const arr1 = [23,43,56,10,5,7];
for(let i = 0;i<arr1.length;i++){
    for(let j=0;j<arr1.length-1;j++){
        if(arr1[j]<arr1[j+1]){
            let temp = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp;
        }
    }
}

console.log(arr1,'arr in descending order');

// 16. find the sum of all elements in an array
let array7 = [1,2,3,4,5];
let sum = 0;
for(let i=0;i<array7.length;i++){
    sum += array7[i];
}
console.log(sum,'sum of all elements in array');


// 17. Count occurrence of a number.
let array8 = [1,2,3,4,5,2,3,2];
let numberToCount = 2;
let count = 0;
for(let i=0;i<array8.length;i++){
    if(array8[i] === numberToCount){
        count++;
    }
}
console.log(`Number ${numberToCount} occurs ${count} times in array`);


// 18 count all elements in array
let array9 = [1,2,3,4,5,2,3,2];
let elementCount = {};
for(let i=0;i<array9.length;i++){
    let element = array9[i];
    if(elementCount[element]){
        elementCount[element]++;
    }else{
        elementCount[element] = 1;
    }
}
console.log(elementCount,'count of all elements in array');


//19. find the second largest element in an array
let array10 = [1,2,3,4,5];
let largest = -Infinity;
let secondLargest = -Infinity;
for(let i=0;i<array10.length;i++){
    if(array10[i]>largest){
        secondLargest = largest;
        largest = array10[i];
    }else if(array10[i]>secondLargest && array10[i] !== largest){
        secondLargest = array10[i];
    }
}
console.log(secondLargest,'second largest element in array');

// 20. find the second smallest element in an array
let array11 = [1,2,3,4,5];
let smallest = Infinity;
let secondSmallest = Infinity;
for(let i=0;i<array11.length;i++){
    if(array11[i]<smallest){
        secondSmallest = smallest;
        smallest = array11[i];
    }else if(array11[i]<secondSmallest && array11[i] !== smallest){
        secondSmallest = array11[i];
    }
}
console.log(secondSmallest,'second smallest element in array');

