// function  getUserDetails(id,getUserSubjects){
//     console.log("getting user datails by userId",id);
//     getUserSubjects({userroll:'659'})
// };

// function getUserSubjects(userRoll,getUserMarks){
//     console.log("getting user subjects by roll number",userRoll);
//     getUserMarks({subid:"en-1"})

// }
// function getUserMarks(userSubId){
//     console.log("getting user marks with subid",userSubId)
// }

// getUserDetails("123",function(userRoll){
//     getUserSubjects(userRoll,function(userSubId){
//         getUserMarks(userSubId)
//     })

// });


function userDetails(mail, callback) {
    console.log("User email is:", mail);
    callback({ use: "Harshitha", mail1: mail }); 
}

function userName(user, callback) {
    console.log("Username using mail:", user.mail1);
    console.log("UserName is:", user.use);
    callback("Login Successful");
}

function login(message) {
    console.log(message);
}


userDetails("saiharshitha@gmail.com", function(user) {
    userName(user, function(loginMsg) {
        login(loginMsg);
    });
});
