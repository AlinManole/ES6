// 01 

let fruits = ['Apple','Orange','Banana']
fruits = [...fruits, 'Raspberry'] 

// 02 

console.log(fruits)

fruits = [
    'Raspberry' ,
    ...fruits
]

console.log(fruits)

// 03 

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

const arr3 = arr1.concat(arr2);

console.log(arr3)

// 04