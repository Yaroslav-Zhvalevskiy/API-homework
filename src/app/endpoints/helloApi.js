const BaseApi = require('../baseApi');

class HelloApi extends BaseApi {
    async getSummary() {
        return this.get('/swagger/paths/hello-api/hello-api.json');
    }
}

module.exports = HelloApi;