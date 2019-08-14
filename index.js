var mongoose = require('mongoose');

mongoose.Query.prototype.countAll = async function countAll() {
    let query = this;
    let model = this.model;
    let count = await model.countDocuments(query._conditions);
    let queryResult = await query.exec();

    if (count && queryResult) {
        let result = {
            rows: queryResult,
            count
        }
        return result;
    }
    else {
        return this;
    }
};
