var axios = require('axios');

var helpers = {
	postSavedTasks: function (array){
		console.log("reached the helper function");
		console.log(array);

		var objectTask = [];
		// for(var i = 0; i < array.length; i++){
		// 	var newTasks = {
		// 		title: array.title,
		// 		createAt: Date.now(),
		// 		task: array.task,
		// 		location:array.location,
		// 		additionalInfo: array.additionalInfo
		// 	};
			 

		// };
		// var newTasks = {
		// 	title: title,
		// 	createAt: Date.now(),
		// 	task: task,
		// 	location:location,
		// 	additionalInfo:additionalInfo
		// };
		return axios.post('/api/tasks',array)
			.then(function(results){
				console.log('axios results',results._id);
				return results._id
			});

	}

};
module.exports = helpers;