const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('<h1>Hello India!!</h1>')
})
const users =[
    {
        id:1,
        name:'Naresh'
    },{
        id:2,
        name:'Umesh'
    },{
        id: 3,
        name:'Srikanth',
    },{
        id:4,
        name: 'Ram'
    }
]
app.get('/users', (req,res)=>{
    // To send the data as json
    res.json(users)
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params, 'rq pqrams')
    const newData = users.filter(user => user.id == req.params.id)
    return res.json(newData)
})
app.post('/addproducts',(req,res)=>{
    // const {id, name} = req.body
    console.log(req, 'ok')
    return res.send(`Data Stored`)
})

app.listen(4040, ()=> console.log('Server is running...'))