var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		require: true,
		trim: true,
		minlength: 1
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	},
	// only let the users who create delete or update the todo
	// name can be anything, not necessary to use "_" as well
	_creator: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
	}
});

module.exports = {Todo};
