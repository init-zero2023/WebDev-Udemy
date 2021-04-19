const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve([1, 2, 3])
        reject('This is my error')

    }, 2000)
})

doWorkPromise.then((result)=>{
    console.log('success', result);
}).catch((error)=>{
    console.log('error', error);
})



///
//                                    Fulfilled
//                                   /
//                                  /
// Promise       --- pending --->  
//                                  \
//                                   \
//                                    rejected
//