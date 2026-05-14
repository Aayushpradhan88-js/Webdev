//TEMPELATE LITERAL - TEMPELATE LITERAL BHANEKO STRINGS LAI CHAI DYNAMIC WAY MA REPRESENT GARNE YEUTA TARIKAA HOO

// const name = "JS"

// console.log(`Hello ${name} ${2+2}`) //es6 feature
// console.log("Hello " + name) //es5 feature

//DESTRUCTUING - DESTRUCTUING BHANEKO KUNAAI PANI VALUE LAAI ACCESS GARNEE HOO (ARRAY, OBJECT, JSON )

//OBJECT
const person = {
    name: "js",
    founder: "Brendien eich",
    location: " xyz",
    a: 34,
    data: true
}

//es5
// console.log("es5",person.name)
// console.log("es5",person.founder)
// console.log("es5",person.location)
// console.log("es5",person.a)
// console.log("es5",person.data)

//es6 - object destructuring
// const {name, founder, location, a, data} = person;
// console.log("es6", founder);
// console.log("es6", name);
// console.log("es6", location);
// console.log("es6", data);

//ARRAY DESTRUCTING
const arraydes = [1, 2, 3, 4, 5]

//es5
// console.log("es5", arraydes[0])
// console.log("es5", arraydes[1])
// console.log("es5", arraydes[2])
// console.log("es5", arraydes[3])
// console.log("es5", arraydes[4])

//es6
// const [a, b, c, d, e] = arraydes;
// console.log("es6", e)
// console.log("es6", d)

//SPREAD OPERATOR - DATA LAAI CHAI EXPAND GARNEE HOO

//OBJECT SPREAD OPERATOR
// const spreadObj = {
//     name: "js",
//     founder: "Brendien eich",
// }

// const data = {...spreadObj, location: "xyz"}
// console.log("data spreaded", data)

//ARRAY SPREAD OBPERATOR
// const arraySpreadData = [1, 2, 3, 4, 5];

// const data = [...arraySpreadData, 6, 7, 8, 9, 10]
// console.log(`Spread data ${data} is this`)

//REST PARAMETER - USUALLY USED FUNCTION

// function restValue(...val){
//     const data = val;

//     return data
// }

// const arr = restValue(1,2,3,4,5)
// console.log("rest value", arr)


//OPTIONAL CHAINING - ?.

// const data = {

// }

// const output = data?.author?.name
// console.log("data", output);

//Nullish Coalescing - ??

// const userName = "xyz";
// console.log("data", userName ?? "Guest")

//Internal js logic of nullish coalescing
// if(left is null or undefined){
//     use right value
// } else {
//     use left value
// }

//Short-circuit evaluation — && and ||

// || - OR operator
// if(true || false){
//     return true
// } else if(false || false){
//     return false
// } else if (true || true){
//     return true
// } else if (false || true) {
//     return true
// } else {
//     console.log("hello I am or operator")
// }

// example 1
// const value = false
// const value2 = true;

// if (value || value2) console.log("value is true")
// else console.log("false")

// && - AND OPERATOR

// if(true && false){
//     return false
// } else if(false && false){
//     return false
// } else if (true && true){
//     return true
// } else if (false && true) {
//     return false
// } else {
//     console.log("hello I am and operator")
// }

// const value = false
// const value2 = true;

// if (value && value2) console.log("value is true")
// else console.log("false")