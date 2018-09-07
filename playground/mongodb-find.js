const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to mongo db');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').find({completed:false}).toArray().then( (results) => {
    console.log('Todos');
    console.log(JSON.stringify(results, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch docs', err);
  });

  client.close();
});
