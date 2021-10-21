// 01 - Push sans push

let fruits = ['Apple','Orange','Banana']
fruits = [...fruits, 'Raspberry'] 

// 02 - Unshift sans unshift 

console.log(fruits)

fruits = ['Apple','Orange','Banana']

fruits = [
    'Raspberry' ,
    ...fruits
]

console.log(fruits)

// 03 - Array concatenation

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

const arr3 = arr1.concat(arr2);

console.log(arr3)

// 04 - Objects

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
  }

  const bobby = {
    firstName: "Bobby",
	...user	
}

console.log(bobby)


// 05 - forEach

    const numbers5 = [1, 2, 3, 4, 5, 6]

    numbers5.forEach( numbers5 => {
        console.log(numbers5)
    })

// 06 - filter 

const numbers = [1, 2, 3, 4, 5, 6]
var result = numbers.filter(number => number % 2 === 0);
console.log(result);

// 07 - Map 

const numbers2 = [1, 2, 3, 4, 5, 6]

const carre = numbers.map(numbers2 => numbers2 * numbers2); 
console.log(carre)