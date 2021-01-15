const functions = require('firebase-functions')

const app = require('express')();

const {
    getAllComplaints
} = require('./APIs/complaints')

app.get('/todos', getAllComplaints);
exports.api = functions.https.onRequest(app);
