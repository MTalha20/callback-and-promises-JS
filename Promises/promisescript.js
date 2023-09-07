let promise_1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise_1 resolved")
    }, 6000)
});


let promise_2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise_2 resolved");
    }, 3000);
})

console.log("before calling promsie");

promise_1.then((data)=>{
    console.log("From callback " + data);
});

promise_2.then((data)=>{
    console.log("From callback " + data);
});

console.log("After calling promise");