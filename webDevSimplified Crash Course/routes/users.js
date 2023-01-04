const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> {
    res.send(users)
    // return users
})

router.get('/new', (req,res)=> {
    // res.send('New User')
    res.render('users/new')
})
router.post('/',(req,res)=>{
    console.log(req.body)
    res.send(`Hii You entered string is ${req.body.firstName}`)
})
// Put the dynamic routes always last 
// router.get('/:id', (req,res)=>{
//     res.send(`Get user with id ${req.params.id}`)
// })

router.route('/:id').get((req,res)=>{
    res.send(`Get the details of user with id ${req.params.id} - ${req.user}`)
}).put((req,res)=>{
    res.send(`Update the user id ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`Delete user with id ${req.params.id}`)
})

const users = ['Naresh', 'Umesh', 'Srikanth', 'Ram', 'Vinay']
router.param('id', (req,res, next, id)=>{
    req.user = users[id]
    //if  u dnt use next it will not execute the next line of code
    next()
})


module.exports = router