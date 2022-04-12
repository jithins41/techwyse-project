const { connect } = require('mongoose');
const Promise = require('promise');
const { DATABASE_URL } = require('./constants');

const createConnection = function () {

    return new Promise((resolve, reject) => {
        connect(DATABASE_URL).then(() => {
            resolve('Database connected');
        }).catch(error => {
            reject(error);
        })
    })


}

module.exports = createConnection;