const projectID = 'sit-22t1-standardise-p-5fec37a'

const {Datastore} = require('@google-cloud/datastore')

module.exports.Datastore = Datastore
module.exports.datastore = new Datastore({projectID:projectID})
module.exports.fromDatastore = function fromDatastore(item) {
    item.id = item[Datastore.KEY].id
    return item
}