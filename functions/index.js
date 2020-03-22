const functions = require('firebase-functions');

exports.entry = functions.https.onRequest((request, response) => {
    response.send(request.toString());
});
