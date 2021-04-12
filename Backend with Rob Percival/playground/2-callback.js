// setTimeout(()=>{
//     console.log('Two seconds are up');
// },200);
// // setInterval(()=>{
// //     console.log('Try it');
// // },2);
// const names = ['Andrew', 'Jen', 'Jess'];
// const shortNames = names.filter((name)=>{
//     return name.length<4;
// });

// // we won't get any value of geocode and there wont be any delay of  5 sec as geocode is a function of function so its not working asynchonously
// // in simple word, async won't work inside a function 
// // for doing that, we use callback functions

// const geocode = (address, callback)=>{
//     setTimeout((address)=>{
//         const data = {
//             lat:0,
//             long:0
//         }
//         callback(data);
//     },5000);
// }

// // const data = geocode('Philadelphia');
// // console.log(data);

// geocode('Philadelphia', (data)=>{
//     console.log(data);
// });


// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) =>{
    setTimeout(()=>{
        callback(a+b);
    },2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})