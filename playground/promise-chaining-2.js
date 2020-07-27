require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndRemove('5eebc02c5e7ba626d01da8ee').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed : false})
// }).then((result) => {
//     console.log('num of incompleted : ' + result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed : false })
    return count
}

deleteTaskAndCount('5ef30cf38e0eee2804c7ac30').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})