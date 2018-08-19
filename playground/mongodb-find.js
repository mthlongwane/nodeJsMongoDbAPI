//const MongoClient = require('mongodb').MongoClient ;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

    if(error){
       return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collection('Todos').find({_id: new ObjectID("5b79c9cdc124085e8d5d5060")
    }).toArray().then((docs) => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log("unable to run find function to db")
    });

    db.close();
});