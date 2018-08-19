//const MongoClient = require('mongodb').MongoClient ;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

    if(error){
       return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
/*
    db.collection('Todos').insertOne({
        text:       "Banter",
        completed:  true
    },(err, result) =>{
        if (err){
            return console.log('Unable to insert ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        }) // allows you insert document
*/
    db.collection('Users').insertOne({
        email:      "thandolwethuMz@live.com",
        password:   "#ZQ2$@3~"
    },(err, res) => {
        if (err){
            return console.log("Could not update DB")
        }
        console.log("success");
    })

    db.close();
});