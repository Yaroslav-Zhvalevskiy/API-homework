const api = require('../app/api');

describe('API. Endpoints', function () {
    it('Hello API', async function () {
        const resp = await api.helloApi.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.headers.server).to.equal('AmazonS3');
        api.expect(resp.data.get.summary).to.equal('Hello API url.');
        api.expect(resp.data).to.be.jsonSchema(api.schema.hello_api);
    });

    it('Paths', async function () {
        const resp = await api.paths.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.headers.server).to.equal('AmazonS3');
        api.expect(resp.data.get.summary).to.equal('Get all shipments.');
        api.expect(resp.data).to.be.jsonSchema(api.schema.shipments);
    });

    it('Schemas', async function () {
        const resp = await api.schemas.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.headers.server).to.equal('AmazonS3');
        api.expect(resp.data.type).to.equal('object');
        api.expect(resp.data).to.be.jsonSchema(api.schema.index);
    });
});