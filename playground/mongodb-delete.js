const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to fetch mongodb servers');
	}
	console.log('success');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Hello'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({text: 'Hello'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteMany({text: 'Hello'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Todos').findOneAndDelete({_id: new ObjectID('5e44b45f492927a3e7ce9059')}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	db.close();
});