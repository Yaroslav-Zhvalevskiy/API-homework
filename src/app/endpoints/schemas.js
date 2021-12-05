const BaseApi = require('../baseApi');

class Schemas extends BaseApi {
    async getSummary() {
        return this.get('/swagger/schemas/error/index.json');
    }
}

module.exports = Schemas;