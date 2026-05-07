//OBJECTS - Data representation garnee yeuta tarikaa hoo & object chai hamro key ra value pair maa dekhainxaa

//Student ko data
//Example - 1
const student = {
    name: "javascript",
    rollNo: 21,
    class: 8,
}


//getting all output of student object
// console.log(student)

//ACCESSING SPECIFIC DATA
// console.log(student.name)
// console.log(student.rollNo)
// console.log(student.class)
// console.log(student.location)

//BASIC OBJECT CRUD - operation

//ADD
// student.location = "Kathmandu"
// console.log(student)

//Update
// student.location = "Biratnagar"
// console.log(student)

//delete
// delete student.location
// console.log(student)




//NESTED OBJECT - object ko bhitra aru object hunxa nested object bhanera
//Example - 2
const student2 = {
    name: "javascript",
    rollNo: 21,
    class: 8,
    address: {
        city: "itahari",
        tole: "damphu chowk",
        no: "209"
    },
    greet: function () {
        console.log("Hello I am " + this.name + "I am from " + this.address.city)
    }
}

student2.greet()

// console.log("nested data", student2);

//accessing nested data only
// console.log("nested data", student2.address.no);


//ARRAY OF OBJECTS
//Example - 3
const language = [
    { name: "aay", age: 25 },
    { name: "bye", age: 20 },
    { name: "ok", age: 21 },
    { name: "thanks", age: 17 },
    { name: "hello", age: 18 },
]

// console.log("output", language)

//Filtering mapping complex data
const lan = language.filter(n => n.age < 21);
// console.log(lan);

//Map
const lan2 = language.map(n => n.name)
// console.log(lan2)

//combination of filter and map
const output5 = language
    .filter((n) => n.age <= 21)
    .map((n) => n.name)

console.log("output", output5)