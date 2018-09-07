var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var jsonParser = bodyParser.json();

app.post('/todos', jsonParser , (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started listening on port 3000');
});

// var newTodo = new Todo({text:'Dinner at bernies'});
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save todo', err);
// });
//
// var user = new User({email:'romi@gmail.com'});
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (err) => {
//   console.log('Unable to save user', err);
// });

// var anotherTodo = new Todo({text:'Dinner tonight at Johnnies', completed: true, doneTimestamp: '5433'});
//
// anotherTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save doc');
// });