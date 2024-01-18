const express = require('express');
const mongoose = require("mongoose")

const userRoute = require("./routes/user")

const PORT = 3000
const app = express()
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/authentication", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// .then(()=>{
//     console.log("Connected to mongoDB")
// }).catch((err)=>console.error('Error connecting to mongoDB', err))

const db = mongoose.connection;
db.once('open', ()=>{
    console.log('Mongoose Connection extablished successfully');
})

app.get('/', (req, res)=>{
    res.send('Hello')
})
app.use("/users", userRoute)

app.listen(PORT,()=>{
    console.log(`Server is connecting with ${PORT}`)
})