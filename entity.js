const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const ds = require('./datastore')
const datastore = ds.datastore
const functions = require('./functions')
const { entity } = require('@google-cloud/datastore/build/src/entity')

router.use(bodyParser.json())

// Routes for entities
router.get('/:id', function(req, res) {
    var id = req.params.id
    functions.get_entity(id).then((entity) => {
        res.status(200).json(entity)
    })
})


router.post('/', function(req, res) {
    functions.post_entity(req.body.name, req.body.age, req.body.weight).then(key => {
        res.status(201).json({ id: key.id, name: req.body.name, age: req.body.age, weight: req.body.weight})
    })
})

module.exports = router
