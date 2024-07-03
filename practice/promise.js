//-----------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "abc", email: "abc@example.com"})
    }, 1000)

})

.then(function(user){
    console.log(user);
})

//------------------------------------------------

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "xyz", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseOne
 .then((user) => {
   return console.log(user);
})

.catch((error) => {
    return console.log(error);
})
.finally(() => 
    console.log("The promise is either resolved or rejected")
)

//--------------------------------------

// async function consumePromiseOne(){
//     try {
//         const response = await promiseOne
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseOne()

//--------------------------------------


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseTwo(){
    try {
        const response = await promiseTwo
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseTwo()

//-----------------------------------
// promiseTwo
// .then((users) => {
//   return console.log(users);
// })

// .catch((err) =>{
//    return console.log(err);
// })
// .finally(() => 
//    console.log("The promise is either resolved or rejected")
// )
//-------------------------------------