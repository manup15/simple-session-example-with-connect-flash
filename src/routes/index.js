const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/register', (req, res) => {
    //send message to session using flash-connect.
    //this message will be save in a global variable at src -> index.js
    //then, the message can be read from any view
    req.flash('flash_message','you are registered')
    res.redirect('/profile')
    
})
router.get('/profile', (req, res) => {
    //if you want to access message only from profile view, you can request the flash
    //message here:
    // const message = req.flash('flash_message') 
    // res.render('profile', {
    //     flash_message
    // }) 
    //but if you want to access message from any view, you could be req the flash message
    //in the root like middleware funcion
    
    
    res.render('profile')

})

module.exports = router