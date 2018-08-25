var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json()); //middleware to send JSON to application



//rest api's have crud. Post is create and is sent as body. 
app.post('/todos', (req, result) => {
    //console.log(req.body)
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc)=>{
        result.send(doc);
    }, (e) => {
        result.status(400).send(e);
    })

})



app.listen(3002, () => {
    console.log('Started on port 3002')
});


/*
var newTodo =  new Todo({
    text: "cook dinner"
})
var newerTodo = new Todo({
    text: "chow course",
    completed: false,
    completedAt: 0
})*/

/*
// actually saves to db and returns promise
newTodo.save().then( (doc) => {
    console.log('save todo',doc)
},(e) => {
    console.log('unable to save todo')
})   

newerTodo.save().then( (doc) =>{
    console.log('Saved todo: ',doc)
}, (e) => {
    console.log('unable to save newertodo')
} )*/

/*


var  newUser = new User({
    email: "  thandolwethumz@live.com  "
}) 
newUser.save().then( (doc) => {
    console.log ("saved user", doc);
}, (e) => {
    console.log("error saving to db")
} ) */