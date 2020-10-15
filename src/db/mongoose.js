const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOD_URL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

// Run to connect to mongoDB
// C:\Users\avsha\mongodb\bin\mongod.exe --dbpath=C:/Users/avsha/mongodb-data