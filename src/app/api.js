const BaseApi = require('./baseApi');
const chai = require('chai');
const HelloApi = require('./endpoints/helloApi');
const Paths = require('./endpoints/paths');
const Schemas = require('./endpoints/schemas');
const schema = require('./schemas/schema');
chai.use(require('chai-json-schema'));

class Api extends BaseApi {
    expect = chai.expect;

    helloApi = new HelloApi();
    paths = new Paths();
    schemas = new Schemas();

    schema = schema;
}

module.exports = new Api();