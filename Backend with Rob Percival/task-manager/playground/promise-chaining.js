require('../src/db/mongoose')
const User = require('../src/models/user')

// 607e8ef4e468fbb0a64234ab

User.findByIdAndUpdate("607e8ef4e468fbb0a64234ab", {age: 16}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:16});
}).then((result)=>{  
    console.log(result  )
}).catch((error)=>{
    console.log(error)
})


const updateAgeAndCount = async(id, age)=>{
    const user = await User.findByIdAndUpdate(id,{ age});
    const count = await User.countDocuments({age});
    return count
}

updateAgeAndCount('607e8ef4e468fbb0a64234ab', 19)
    .then((count)=> console.log(count))
    .catch((error)=> console.log(error))