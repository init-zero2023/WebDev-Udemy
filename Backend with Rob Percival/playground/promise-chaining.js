const add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        }, 2000)
    })
}

// complex method of chaining 

// add(1,2).then((sum)=>{
//     console.log(sum)
//     add(sum, sum).then((sum)=>{
//         console.log(sum)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }).catch((error)={

// })



// method 2

add(2, 2).then((sum)=>{
    console.log(sum)
    return add(sum, 4)   
}).then((sum)=>{
    console.log(sum)
}).catch((error)=>{
    console.log(error)
})
