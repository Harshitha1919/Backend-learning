// function getUserEmail(email){
//     return new Promise((resolve,reject)=>{
//         console.log("User email is ",email);
//         resolve({name:"sarayu"})
//     })
    
// };
// function getUserName(name){
//     return new Promise((resolve,reject)=>{
//      console.log("User Name is ",name);
//       resolve({status:"success"})
//     })
// }
// function showLoginStatus(status){
//     return new Promise((resolve,reject)=>{
//        console.log("Login Status is",status);
//        resolve({status:"success"});
//     })
// }

// getUserEmail("allampallisarayu64@gmail.com").then((result)=>{
//     return getUserName(result.name)
// }).then((result)=>{
//     return showLoginStatus(result.status)
// }).then((result)=>console.log(result)).catch((error)=>{
//     console.log(error);
// });


// function getUserDetails(rollnumber){
//     return new Promise((resolve,reject)=>{
//        console.log("roll number is:",rollnumber)
//        resolve({name:"Harshitha"})
//     })

// };
// function getUserName(name){
//     return new Promise((resolve,reject)=>{
//         console.log("User name is",name)
//         resolve({college:"AEC"})
//     })
// }
// function getCollegeName(college){
//     return new Promise((resolve,reject)=>{
//         console.log("College name:",college)
        
//     })
// }
// getUserDetails("saiharshitha@gmail.com").then((result)=>{
//     return getUserName(result.name)
// }).then((result)=>{
//         return getCollegeName(result.college)
//     }).then((result)=>{
//             console.log(result)
//         }).catch((error)=>{
//             console.log(error);
//         }
//         )


        function getUserDetails(rollnumber) {
    return new Promise((resolve, reject) => {
        console.log("roll number is:", rollnumber);
        resolve({ name: "Harshitha" });
    });
}

function getUserName(name) {
    return new Promise((resolve, reject) => {
        console.log("User name is:", name);
        resolve({ Marks:6});
    });
}

function getResult(Marks) {
    return new Promise((resolve, reject) => {
        console.log("Student CGPA:", Marks);
        if(Marks>7){
        resolve("Eligible")
        }
        else{
            reject({Error:"Not have good CGPA"})
        }
    })

};


getUserDetails("23A91A0539")
    .then((result) => {
        return getUserName(result.name);
    })
    .then((result) => {
        return getResult(result.Marks);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
