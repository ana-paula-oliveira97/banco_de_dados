import express from 'express'
import nedb from 'nedb'
import rest from 'express-nedb-rest'


const app = new express()
const db = new nedb({ filename: 'exemplo.db', autoload: true })


const api = rest()
api.addDatastore('api', db)

app.use('/', api)

app.listen(8080, () => console.log('Listening at http://localhost:8080/api'))