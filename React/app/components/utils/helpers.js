var axios = require('axios');

var helpers = {
	postSavedTasks: function (title, task, location,additionalInfo){

		var newTasks = {
			title: title,
			createAt: Date.now().
			task: task,
			location:location,
			additionalInfo:additionalInfo
		};
		return axios.post('/create/post',newTasks)
			.then(function(results){
				console.log('axios results',results._id);
				return results._id
			})

	}

}