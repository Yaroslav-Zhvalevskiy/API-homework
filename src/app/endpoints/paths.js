const BaseApi = require('../baseApi');

class Paths extends BaseApi {
    async getSummary() {
        return this.get('/swagger/paths/shipments/shipments.json');
    }
}

module.exports = Paths;