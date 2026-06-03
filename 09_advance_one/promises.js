// const promiseOne = new Promise(function (resolve, reject) {
//     //Do a sync Task 
//     // DB call, cryptography, network

//     setTimeout(function () {
//         console.log("Async Task one is completed")
//         resolve()
//     }, 3000)

// })

// promiseOne.then(function () {
//     console.log("Promise one consumed");

// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async Task 2");
//         resolve()
//     }, 4000)
// }).then(() => console.log("Async Task 2 Resolved")
// );


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({ username: "Shaialndra", email: "abc@gmail.com" })
//     }, 2000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


const promisefour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Shaialndra", password: "1234" })
        }
        else {
            reject('Error : Something Went Wrong')
        }
    }, 1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username
})
    .then((myusername) => {
        console.log(myusername);

    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(() => {
        console.log("Promise is resolved");

    }

    )


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "JavaScript", password: "abc" })
//         }
//         else {
//             reject('Error : Something Went Wrong')
//         }

//     }, 2000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log("Error : ", error);

//     }

// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { return response.json() })
    .then((data)=>{
        console.log(data);
        
    })
    .catch((error) => console.log(error)
    )