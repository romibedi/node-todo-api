const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to mongo db');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').deleteMany({completed:false}).then( (results) => {
    console.log('Todos');
    console.log(results);
  }, (err) => {
    console.log('Unable to delete docs', err);
  });

  db.collection('Todos').deleteOne({text: 'Get some data copied'}).then( (results) => {
    console.log('Todos');
    console.log(results);
  }, (err) => {
    console.log('Unable to delete docs', err);
  });

  db.collection('Todos').findOneAndDelete({text:'Just do it'}).then( (results) => {
    console.log('Todos');
    console.log(results);
  }, (err) => {
    console.log('Unable to delete docs', err);
  });

  client.close();
});
