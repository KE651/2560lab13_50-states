// Express server/API server for the Vue 50 States app
// Vue can request list of states, info on 1 state, or change request
// through this Express/API server
console.log('states.js')
let express = require('express')
let States = require('../models').States

let router = express.Router()
// router holds URL for each page, also a vue component for each page
// router changes pages and loads the new component

router.get('/states', function(req, res, next){
    States.findAll({ order: ['name']}).then(states => {
        return res.json(states)})
.catch( err => next(err)) })
// for data about all the states

router.get('/state/:name', function(req, res, name) {
    let stateName = req.params.name
    States.findOne( {where: {name: stateName}})
    .then(state => {
        if (state) {
            return res.json(state)
        } else {
            return res.status(404).send('State not found.')
        }
    }).catch(err => next(err))
})
// for data about one state

router.patch('/state/:name', function(req, res, next) {
    // :name parameter to match the /state/name
    let stateName = req.params.name
    let stateVisited = req.body.visited
    
    States.update({ visited: stateVisited }, { where: {name: stateName}})
    //Vue sends data with request
        .then( rowsUpdated => {
            if (rowsUpdated) {
                return res.send('Updated.')
            } else {
                return res.status(404).send('State not found.')
            }
        })
        .catch(err => next(err)) //any other errors
})
// to update the state visited status

console.log('End of states.js')
module.exports = router
