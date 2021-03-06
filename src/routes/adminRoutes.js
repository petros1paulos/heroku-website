const express = require('express');
const { MongoClient } = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

const dbUrl = 'mongodb+srv://petros:paulos@cluster0-hgskc.mongodb.net/test?retryWrites=true';
const dbName ='herokuwebDB';

const adminRoutes = express.Router();

adminRoutes.route('/register').get((req, res) => {
    res.render('register');
});
adminRoutes.route('/register').post((req, res) => {
    
    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(dbUrl, { useNewUrlParser: true });
            const db = client.db(dbName);
            const response = await db.collection('users').insertOne({username: req.body.email, password: req.body.password});
            res.send(response);
        } catch (error) {
            res.send(error.message);
        }
        client.close();
    }());
});
adminRoutes.route('/login').get((req, res)=>{
res.render('login');
});
module.exports = adminRoutes;