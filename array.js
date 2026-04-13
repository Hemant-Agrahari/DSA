// Array is a linear data structure that can hold multiple values. It is a collection of elements, where each element is identified by an index. In JavaScript, arrays are dynamic and can hold elements of different types.It store data in contiguous memory locations and provide fast access to elements using their index. Arrays can be used to store a list of items, such as numbers, strings, or objects, and they support various operations like adding, removing, and iterating over elements.


let arr = [];
arr.push(1);
arr.push(10);
arr.push(100);
arr.push(1000);
arr.push(10000);
arr.push("123");
arr.push("hemant")
arr.pop();
arr[12] = 1234;
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


let ar1 = new Array(5);
ar1[0] = 1;
ar1[1] = 10;
ar1[2] = 100;
ar1[3] = 1000;
ar1[4] = 10000;
ar1[5] = "123";
ar1[6] = "hemant";
ar1.push(10344)
console.log(ar1);




let aee =new Array(5);
// arr[0] =Number(prompt("Enter a number:"));
// console.log(arr[0]);

// for(let i = 0;i<aee.length-1;i++){
//     aee[i] = Number(prompt("Enter a number:"));
// }
// console.log(aee);





let cde = [1,2,3,4,5];
console.log(cde.length,'length of array');
let sum = 0;
for(let i=0;i<cde.length;i++){
sum = sum + cde[i];
}
console.log(sum,'sum of array');


let cde1 = [1,2,3,4,5];
let maxEle = cde1[0];
for(let i=1;i<cde1.length;i++){
    if(cde1[i]>maxEle){
        maxEle = cde1[i];
    }
}
console.log(maxEle,'max element of array');


let cde2 = [1,2,3,4,5];
let maxEle1 = Math.max(cde2[0],cde2[1]);
let secondMaxEle = Math.min(cde2[0],cde2[1]);
for(let i =2;i<cde2.length;i++){
    if(cde2[i]>maxEle1){
        
    }
}