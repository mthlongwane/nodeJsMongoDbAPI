//const MongoClient = require('mongodb').MongoClient ;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

    if(error){
       return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // deleteMany
/*    db.collection('Todos').deleteMany({text: "awe"}).then((error,result) => {
        if(error){
            console.log("Problem!",error);
        } 
        console.log(result)
    }); */
    //deleteOne
/*    db.collection('Todos').deleteOne({text: "banter"}).then((error,result) => {
        if(error){
            console.log("Problem!",error);
        } 
        console.log(result)
    }); */
    //FindOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((error,result) => {
        if(error){
            console.log("Problem!",error);
        } 
        console.log(result)
    }); 
    //db.close();
});