//map

const arrayNumbers = [10, 20, 30, 40, 50]

// const mapValue = arrayNumbers.map((value) => {
//     console.log(value)
// })

// const forEachValue = arrayNumbers.forEach((value) => {
//     console.log(value)
// })


function double(val) {
    return val * 2
}

// const output = arrayNumbers.forEach(double)
const output= arrayNumbers.map(double)
console.log(output)