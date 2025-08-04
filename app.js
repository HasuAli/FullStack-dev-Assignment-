// Problem 1 Delayed Greeting

/*function greet(name,callback){
    console.log(`Hello ${name}`);
    setTimeout(()=>{
            callback()
    },2000)
}

greet("Hasnain",()=>{
    console.log("Greeting finished!");

})*/

// PROBLEM 2 Sequential Delays

/*function sequenDelay(callback) {
    setTimeout(() => {
        callback("step 1")
        setTimeout(() => {
            callback("step 2")
            setTimeout(() => {
                callback("Step 3")
            }, 3000)
        }, 2000)
    }, 1000)

}
sequenDelay((res)=> console.log(res))*/

// Problem 3 — Simple Calculator with Callback

/* function calculator(a, b, operationCallback) {
        setTimeout(() => {
            operationCallback(a,b)
        }, 1000)

}

calculator(10, 3, (a,b) => console.log(a*b)) */


// Problem 4 — Fake API Call

// function getUserData() {
//     const pro =  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.3) {
//                  reject("Your request is cancel")
//             } else {
//                  resolve("Resolved ",{ id: 1, name: "Ali", age: 25 })
//             }
//         }, 2000)
//     })
//     console.log(pro);

// }
// getUserData()


// Problem 5 — Chained Promise
/*
function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve({ id: 12, name: "Ali" })
        },1000)
    })

}
function getPost(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(["Post1","Post2"])
        },1000)
    })
}
getUser().then((user)=>{
    console.log(user.name);
    return  getPost(user.id)
})
.then((post)=>{
     console.log(post.join());
}) */




/* Problem 6 - Promise.all
 const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("resolve 1")
    },1000)
    
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("resolve 2")
    },2000)
})

Promise.all([p1,p2]).then((res)=>{
    console.log("Both promises done!" );  
}).catch((error)=>{
    console.log("Any one promise is not run",error); 
})
*/

//  Async/Await

// Problem 7 — Async API Fetch
// Convert Problem 4 (getUserData) to use async/await.
/*
async function getUserDataWithAsync() {
    const pro = await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Your request is cancel")
            } else {
                resolve({ id: 1, name: "Ali", age: 25 })
            }
        }, 2000)
    })
    console.log(pro);

}
getUserDataWithAsync().then((res) => {
    console.log(res);

}) */

// Problem 8 — Weather App Simulation
/*
async function getWeather(city){
   let promise = await new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(`${city} 25°C`)
        },1000)
    })
    console.log(promise);
    
}
getWeather("Hyderabad")
*/

// Problem 9 — Sequential Async/Await

//  function delay(ms){
//       return new Promise((resolve) => {
//         setTimeout(()=> resolve(),ms)
//       })
// }
// async function download(){
//     await delay(1000)
//     console.log("Download starting");
//     await delay(2000)
//     console.log("Downloading...");
//       await delay(1000)
//     console.log("Downloading completed");
// }
// download()


//  Extra Challenge — Compare All Three
// Build the same "Get User → Get Posts" workflow:
// Using Callbacks (nested style)
// Using Async/Await

// function  getUser1(callback){
//       setTimeout(()=>{
//         callback({id : 1, name : "Hasnain"})
//       },1000)
// }
// function getPost1(userId,callback){
//  setTimeout(()=>{
//         callback(["Post1","Post2"])
//       },2000)
// }

// getUser1((user)=>{
//      console.log(user.name);
//      getPost1(user.id, (Post)=>{
//         console.log(Post.join(" , "));

//      })
// })

// Using Async/Await
// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//         resolve({ id: 12, name: "Ali" })
//         },1000)
//     })

// }
// function getPost(userId){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve(["Post1","Post2"])
//         },1000)
//     })
// }

// async function getUserAsync(){
//       try{ 
//         const user = await getUser()
//         console.log(user.name);

//       const post = await getPost(user.id);
//       console.log(post.join(" , "));

//       }catch(error){
//         console.log("Error comes",error);

//       }
// }

// getUserAsync();



// Problem 10 — Real API Integration
// Using async/await:

// Fetch JSON data from:
// https://jsonplaceholder.typicode.com/users/
/*
async function getData(){
  let fetching = await fetch("https://jsonplaceholder.typicode.com/users/")
  console.log(fetching);
  let objuse = await fetching.json()
  console.log(objuse);
  
  console.log(objuse[0].name,objuse[0].email,objuse[0].address.city);
  console.log(objuse[1].name,objuse[1].email,objuse[1].address.city);
}
getData() */