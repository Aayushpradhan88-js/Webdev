//Modifying Array



//BASIC ARRAY - METHODS

const arrNum = [1, 2, 3, 4, 5];

// 1. push() - yesle chai antim ma number add gardinxaa
arrNum.push(7,8)
// console.log(arrNum)

//2. pop() - yesle chai antim ko number laai delete gardinxaa
arrNum.pop()

//3. slice
const slice = arrNum.slice(2,4)
// console.log("slice output", slice)
// console.log("original array",arrNum)

// 4. splice
const splice = arrNum.splice(2,4)
// console.log("original array", arrNum)
// console.log("splice output", splice)






//ADVANCE ARRAY - METHODS

const arrayNumbers = [10, 20, 30, 40, 50]

function double(val) {
    return 10 * 2
}

//1. Foreach - foreach le chai value return gardaaina function maa
// const forEachValue = arrayNumbers.forEach((value) => {
//     console.log(value)
// })
// console.log("output: ", forEachValue)

// function example
const output = arrayNumbers.forEach(double)
// console.log(output)

//2. map - map le chai value laai return garxaa function maa
// const mapValue = arrayNumbers.map((value) => {
//     console.log(value)
// })

// function example
const output= arrayNumbers.map(double)

// console.log(output)
// console.log("output", mapValue);

//2. find() - array ko block ma herxa value xa ki xaina bhanera xaina bhane undefined xa bhane output dinxaaa
const findOutput = arrayNumbers.find((value) => value === 10)
// console.log("output: ", findOutput)

//filter() - yesle chai array ko block ma herxa value ani filter garxa value haru
const filterOutput = arrayNumbers.filter((value) => value % 2 !== 0)
// console.log("output: ", filterOutput);