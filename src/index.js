const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

//configs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'mysecretesession',
    resave: false,
    saveUninitialized: false    
}))
app.use(flash())
// middleware function to save "message" from flash into local variable
app.use((req, res, next) => {
    app.locals.flash_message =  req.flash('flash_message')    
    next()
})

//routes 
app.use(require('./routes/index.js'))

app.listen(process.env.PORT || 4000, (req, res ) => {
    console.log('Server running on port ', 4000);
    
})