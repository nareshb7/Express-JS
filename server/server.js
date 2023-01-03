const express = require('express')
const app = express()

app.use(express.json())
// app.use(express.urlencoded({extended: false}))

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
app.get('/',(req,res)=>{
    res.send('<h1>Hello India!!</h1>')
})


app.get('/users/:id',(req,res)=>{
    console.log(req.params, 'rq pqrams')
    const newData = users.filter(user => user.id == req.params.id)
    return res.json(newData)
})
app.post('/addproducts',(req,res)=>{
    // const {id, name} = req.body
    users.push(req.body)
    console.log(req.body , 'ok')
    return res.send(`Data Stored`)
})
app.get('/users', (req,res)=>{
    // To send the data as json
    res.json(users)
    return users
})

app.listen(4040, ()=> console.log('Server is running...'))