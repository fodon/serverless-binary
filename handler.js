'use strict';

var fs = require('fs');

module.exports.hello = (event, context, callback) => {
    fs.readFile("templates/i-130.pdf", function (err, data) {
        callback(null, {
            statusCode: 200,
            headers: {'Content-Type': 'application/pdf'},
            body: JSON.stringify({
                message: data.toString('base64')
            })
        });
    });
};