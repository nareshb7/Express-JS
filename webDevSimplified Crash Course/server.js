const express = require('express')
const app = express()
// EJS -- Embedded JavaScript templates
app.use(express.static("public"))
app.set('view engine', 'ejs')
const logger =(req,res, next)=>{
    console.log(req.originalUrl)
    next()
}
app.use(logger)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res)=>{
    // res.send('hello')
    // res.sendStatus(500)
    // res.status(500).send('hello world')
    // res.status(500).json({ message : 'Hello World..'})
    // res.download("server.js")
    // we have to import the ejs package n we need ejs extension in vs code
    res.render('index', { text :'This is from server'})
})

// Routes
const userRouter = require('./routes/users')


app.use('/users', userRouter)

app.listen(5050, ()=> console.log('server is running...'))