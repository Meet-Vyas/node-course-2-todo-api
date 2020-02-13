const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to Mongodb Servers');
	}
	console.log('success');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5e4545cd492927a3e7cea2a5')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(JSON.stringify(result));
	// });

	db.collection('Users').findOneAndUpdate({
		name: 'Abhi'
	}, {
		$set: {
			name: 'Abhi'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	db.close();
});