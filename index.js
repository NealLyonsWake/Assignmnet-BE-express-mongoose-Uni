const express = require('express')
const app = express()
path = require('path')
const mongoose = require('mongoose')
const port = 3000
const portalForm = require('./PortalForm')
const currentStudent = require('./student')

app.use(express.urlencoded()) // use to post and access the req.body data

app.get('/',(req,res)=>{
    res.send(portalForm())
})

app.get('/error',(req,res)=>{
    res.send('<h1>Oh no, such Error!</h1>')
})

app.get('/welcome',(req,res)=>{
    res.send(`<h1>Welcome to your grade</h1>
    <h2>You got an A++ for being super, awesome!</h2>`)
})

app.post('/',(req,res)=>{
    const {s_number="", s_pin=""} = req.body

if(s_number === currentStudent.s_number && s_pin === currentStudent.s_pin){
    return res.redirect('/welcome')
} else {
    console.log(req.body)
    return res.redirect('/error')
}
})

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})




