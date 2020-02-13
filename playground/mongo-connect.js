const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to Mongo server');
	}
	console.log('Successfully connected');

	// db.collection('Todos').insertOne({
	// 	text: 'Hello',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert into DB', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		// _id: 123,
		name: 'Meet', 
		age: 21, 
		location: 'Surat'
	}, (err, result) => {
		if(err) {
			return console.log('Unable to insert into DB', error);
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	});

	db.close();
});