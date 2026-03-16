//Asynchronous Programming 

// console.log("Begin");
// setTimeout(()=>{console.log("Data Intiated")},2000);
// console.log("End");

/*
CallBack Functions
*/

//PROMISES

let promise = new Promise((resolve , reject)=>{
    let success = true;

    if(success){
        resolve("Data Connected");
    }
    else{
        reject("Error in connection");
    }
})

//consuming promise

fetch()