// const PromiseONe=new Promise(function(resolve,reject){

//     setTimeout(() => {
//         console.log("Inside the promise : ");

//         resolve();

//     }, 2000);

// });

// PromiseONe.then(()=>{
//     console.log("Promise completed : ");
// });



// // Another Way is : 


// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Asynch Code 2 : ");
//         resolve();
//     }, 2000);
// }).then(function(){
//     console.log("task is completed ! : ");
// });



// // Pass Oject in resolve function : 

// const PromiseThree=new Promise((resolve,reject)=>{
//     setTimeout(() => {

//         resolve({userNmae:'Anshu',email:'Abhijeetkumar3015@gmail.com',Phone:7079840969});

//     }, 2000);
// });

// PromiseThree.then(function(user){

//     console.log(user);

// });


 

// const PromisFour=new Promise(function(resolve,reject){

// setTimeout(() => {
//     let Error=false;

//     if(!Error){

//         resolve({UserName:'Anshu',Email:'Abhijeetkumar@gmail.com'});

//     }else{

//         reject('Error: Something went wrong : ');

//     }
    


// }, 2000);

// });

// PromisFour.then((user)=>{

//     return user.Phone;

// })
// .then((username)=>{
    
//     console.log(username);

// })
// .catch(function(Error){
    
//     console.log(Error);

// })
// .finally(()=>{
//     console.log("Everything is done : : ");
// });



// // Chain of promise and then function : 

// new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let Error=false;

//         if(!Error){

//             resolve({username:'Anshu',email:'Anshukumar@gmail.com',phone:7079840969});
//         }else{
//             reject("Something went wrong : " );
//         }
//     },2000);
// }).then((user)=>{

//     return user.username;

// }).then((username)=>{
//     console.log(username);
// }).catch((Error)=>{
//    console.log(Error);
// }).finally(()=> console.log("All Done : "));


// Async awai in Promises : 



const PromiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{

        let Error=false;

        if(!Error){
            
            resolve({Name:'Abhijeet',email:'Abhijeetkumar@gmail.com',phone:7079840969});
        }else{
            reject('something went wrong: ');

        }

    },2000);
});

async function consume_Response(){
    try{
        const Response=await PromiseFive;
        console.log(Response.Name);
    }
    catch(Error){

        console.log(Error);

    }
}

consume_Response();

