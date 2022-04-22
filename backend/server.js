//import express, {Application, Request, Response} from 'express';
const express = require('express');
const dotenv = require('dotenv');
//const path = require('path');
const connectDBs = require('./db');
const cors = require('cors');

dotenv.config({path:'config.env'})
const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}))
//const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT || 4200

app.use(express.json());


connectDBs()

app.use('/', require('./router'))

app.listen(PORT, () =>{
    console.log(`Server started at ${PORT}`)
})
