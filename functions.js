const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const ds = require('./datastore')
const datastore = ds.datastore

const ENTITY = 'entities'

module.exports.get_entity = function(id) {
    const key = datastore.key([ENTITY, parseInt(id, 10)])
    return datastore.get(key)
}



module.exports.post_entity= function(name, age, weight) {
    const key = datastore.key(ENTITY)
    const entity = {'name': name, 'age': age, 'weight': weight}
    const new_entity = { key: key, data: entity }
    return datastore.insert(new_entity).then(() => {
        return key;
    })
}