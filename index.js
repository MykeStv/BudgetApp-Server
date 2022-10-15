import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import TransactionRoutes from './routes/Transactions.js'

const app = express()
const PORT = 5000

//Investigate this three lines
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors()) 

app.use('/transactions', TransactionRoutes)

//Mongodb local
const CONNECTION_URL = 'mongodb://localhost:27017/budget'
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>  app.listen(PORT, console.log(`server running on port: ${PORT}`)))
    .catch(error => console.log(error))
/* mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true },
    err => err ? console.log(err) : console.log('connected to mongodb')
) */


app.get('/', (req, res) => {
    res.send('Hello World!')
})

