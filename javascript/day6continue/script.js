//OOP - Object Oriented Programming

//OOP - REALWORLD THINGS LAI OBJECT KO FORM MAA REPRESENT GARNE PROGRAMMING STYLE HOOO


//Real world things - car, phone, student, bankaccount etc. 

//CAR
//PROPERTIES - Color, brand, speed, fuel
//METHODS - start, stop, drive, brake

//CLASS

// class = ghar ko design map
// Object = actual house

//Example-1
// class Student { //template hoo

// }

//Normal object creation garne tarikaaa
// const stu = new Student() //new - create new object for class

// console.log("class-1", stu)


//CONSTRUCTOR - INITIALIZE PROPERTIES

// class Student {
//     //constructor automatically runs
//     constructor(name, age, location){
//         //storing values inside object
//         this.name = name;
//         this.age = age;
//         this.location = location;
//     }
// }

// const output = new Student("xyz", 16, "Kathmandu")
// console.log("constructor output: ", output)
//internall JS visualization
// const output = {
//     name: "xyz",
//     age: 16,
//     location: "kathmandu"
// }


//Methods inside classes

// class Student {
//     constructor(name){
//         this.name = name;
//     }

//   //method
//     greet() {
//         console.log(`Hello I am ${this.name}`)
//     }
// }

// const out = new Student("Aayush");
// out.greet()
// console.log("data: ", out.greet())

//calculator

class Calculator {

    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }

}

const out = new Calculator()
out.

//INHERITANCE - EXTEND AND SUPER
//INHERITACNE - REUSING PARENT FEATURES/POWERS

//Extend
//Parent
// class Tom {

//     working (){ //method
//         console.log("working")
//     }

//     eat(){
//         console.log("eating")
//     }

// }

// child
// class Tommy extends Tom {

// }
// class HungryMan extends Tom{

// }

// const out = new Tommy()
// out.working() //inherit

// const h = new HungryMan()
// h.eat()

//SUPER

class Tom {//parent class
    constructor(name) {
        this.name = name
    }
}

class Tommy extends Tom { //chile class
    constructor(name, breed) {

        super(name) //parent constructor laai class gardaai xum

        this.breed = breed
    }
}

const tom1 = new Tommy("my name is tommy and i am coding", "I am eating something i don't know about it")
console.log("output", tom1)

//bonus

// const array = [1, 2, 3, 4, 5]

// array.


// class arra {
//     at(){}
//     concat(){}
//     forEach(){}
//     forOf(){}
//     javascript(){}
// }

// const arr = new arra()
// arr.javascript()