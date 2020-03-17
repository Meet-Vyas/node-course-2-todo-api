const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

Todo.remove({}).then((result) => {
  console.log(result);
});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5e5e5ae8c300797c39015c94'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5e5e5ae8c300797c39015c94').then((todo) => {
  console.log(todo);
});
