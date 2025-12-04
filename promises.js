function getUserEmail(email){
    return new Promise((resolve,reject)=>{
        console.log("User email is ",email);
        resolve({name:"sarayu"})
    })
    
};
function getUserName(name){
    return new Promise((resolve,reject)=>{
     console.log("User Name is ",name);
      resolve({status:"success"})
    })
}
function showLoginStatus(status){
    return new Promise((resolve,reject)=>{
       console.log("Login Status is",status);
       resolve({status:"success"});
    })
}

getUserEmail("allampallisarayu64@gmail.com").then((result)=>{
    return getUserName(result.name)
}).then((result)=>{
    return showLoginStatus(result.status)
}).then((result)=>console.log(result)).catch((error)=>{
    console.log(error);
});

// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve("success");
//     }
//     else{
//         reject("failure");
//     }
// })
// promise.then((result) => {
//     console.log("success");
// })
// .catch((error) => {
//     console.log("failure");
// });