const index = require('./index');
const hello_api = require('./hello-api');
const shipments = require('./shipments');

const schema = {
    index,
    hello_api,
    shipments
}

module.exports = schema;