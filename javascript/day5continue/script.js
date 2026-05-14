//ASYNC/AWAIT

//ASYNC - ASYNCHORNOUS
//AWAIT - WAITS FOR THE PROMISE TO RESOLVE

//async syntax
// async function name(){
//your code
// }

// async function greet(){
//     return "Hello World";
// }


//AWAIT - WAITS OR HOLD THE DATA UNTIL THE DATA IS NOT LOADED PROPERLY

//EXAMPLE-1
// function getsomething(){
//     const data = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dataAchieved = "USER REGISTER SUCCESSFULL"
//             resolve (dataAchieved)
//         }, 8000)
//     })

//     return data
// }

// async function showData(){
//     console.log("Loading.......");

//     const result = await getsomething()

//     console.log(result)
// }

// showData()


//EXAMPLE-2
// function authSystem(val) {
//     const authData = new Promise((resolve, reject) => {
//         if (val === "admin") {
//             console.log("Loading.....");

//             setTimeout(() => {
//                 const adminData = "You're loggedIn to dashboard"
//                 resolve(adminData);
//             }, 3000)
//         } else {
//             const error = console.error("YOU'RE NOT AN ADMIN")
//             reject(error)
//         }
//     })
//     return authData
// }

// async function s() {
//     try {
//         const result = await authSystem("user")
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// s()




//FETCH

async function getData() {
    const fakeData = await fetch("https://jsonplaceholder.typicode.com/users/1")
    // console.log("data", fakeData)
    const data = await fakeData.json()
    console.log("parsed data", data)
}

getData()