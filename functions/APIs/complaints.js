const { db } = require('../util/admin');

exports.getAllComplaints= (request, response) => {
	db
		.collection('complains')
		.get()
		.then((data) => {
			let complaints = [];
			data.forEach((doc) => {
				complaints.push({
                    todoId: doc.id,
                    name: doc.data().Name,
					locality: doc.data().Locality,
					pics: doc.data().Pictures,
					remarks: doc.data().Remarks,
				});
            });
            console.log(complaints)
			return response.json(complaints);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};