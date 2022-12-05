//serve Vue app with express backend framework to manage server and routes
// create the server on port 3000
let express = require('express')

let path = require('path')
let states_api = require('./routes/states')
//tell server.js where the routes file is located

let app = express() // initialize app
app.use(express.static(path.join(__dirname, 'client', 'dist')))
app.use(express.json())

let vueClientPath = path.join(__dirname, 'client', 'dist')
let vueApp = express.static(vueClientPath)
app.use('/', vueApp)

app.use('/api', states_api) // router

app.use(function(req, res, next) {
    res.status(404).send('Not found.')
})

app.use(function(req, res, next) {
    console.error(err.stack) // log error for debugging
    res.states(500).send('Server error.')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log("Express server running on port ", server.address().port)
})