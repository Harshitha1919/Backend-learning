function getUserDetails(id){

}
};
function getUserSubjects(suerRoll){
    return new Promise((resolve,reject)=>){
        console.log("fun2 called")
        resolve((userSubId:'en-1'));
    })
}
function getUsermarks(userSubId){
    return new Promise((resolve,reject()=>){
        console.log("fun3 called")
        resolve("getting user marks with subid",userSubjectId    
        })
    };
    getUserDetails("123").then(result)=>{
         return getUserSubjects(result.rollnumber)
    });
}