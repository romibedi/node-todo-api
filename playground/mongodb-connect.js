const MongoClient = require('mongodb').MongoClient;

const user = {name: 'Raminder', age:45};
console.log(user);

// De-constructing user object into other objects - ES6
const {name} = user;
const {age} = user;

console.log(name, age);

// const {MongoClient, ObjectID} = require('mongodb'); // De-constructing MongoClient and Object ID from mongodb object
//
// // Create your own _id object ids
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to mongo db');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

    db.collection('Users').insertOne({
      name: 'Raminder Bedi',
      age: 45,
      location: 'Gurgaon'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err);
      }

      //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });


  client.close();
});
