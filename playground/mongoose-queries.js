const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

var id = '5e49e889a78135d4129503c80';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', JSON.stringify(todo));
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    console.log('User not found');
  }
  console.log('User by id', JSON.stringify(user));
}).catch((e) => console.log(JSON.stringify(e, undefined, 4)));
