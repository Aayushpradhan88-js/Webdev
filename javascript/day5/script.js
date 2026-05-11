// console.log("1")
// console.log("2")

// //callback hell example
// // setTimeout(() => {
// //     console.log("loginuser")
// //     setTimeout(() => {
// //         console.log("Get user data")
// //         setTimeout(() => {
// //             console.log("You are a developer")
// //         }, 14000)
// //     }, 13000)
// // }, 12000)

// //PROMISE

const  newPromiseExample = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("DATA FETCHED")
    } else{
        reject("ERROR: Failed to fetch data")
    }
})

newPromiseExample
    .then((aayush) =>{ //success ko data aauxa
        console.log(aayush);
    })
    .catch((error) => { //error ko data aauxaa
        console.error("error", error)
    })
    .finally(() => { //No matter what happen error aaos ya success aaos yo code chalxaaa
        console.log("This will always run")
    })

console.log("3")