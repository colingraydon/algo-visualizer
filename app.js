//imports express
const express = require('express')

//creates the app
const app = express()

//sets the port
const PORT = process.env.PORT || 3000

//sets the folders for static files to be served - css and js
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

//sets the view engine to use the root dir folder and ejs
// app.set('views', "./views")
app.set("views", "./")
app.set('view engine', 'ejs')

//renders the home page index.ejs
app.get('', (req, res) => {
    res.render('index')
})

//has the app listen on port 3000 or one sent in process.env
app.listen(PORT, () => console.info(`listening on port ${PORT}`))