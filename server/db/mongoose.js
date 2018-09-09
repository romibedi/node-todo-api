var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose: mongoose }; // exporting an objects
// can also be shortened to
// module.exports = {mongoose};
