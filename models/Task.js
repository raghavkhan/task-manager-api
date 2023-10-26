const mongoose = require('mongoose');
// const { Mongoose } = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//   name: String,
//   completed: String,
// });

//simple validating
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characters'],
    minlength: [4, 'name cannot be less than 4 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
