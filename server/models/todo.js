var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{type:String, required:true, minlength:10, trim:true},
    completed:{type:Boolean, default:false},
    specialMessage:{type:String, default:null},
    doneTimestamp:{type:String, default:null},
});

module.exports = {Todo};
