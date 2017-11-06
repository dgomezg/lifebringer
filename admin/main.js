var data_endpoint = "db-devoxx.liferay.com";
var auth_endpoint = "auth-devoxx.liferay.com";

document.getElementById("delete-db").addEventListener("click", deleteCollection);
document.getElementById("get-user-list").addEventListener("click", getUsers);

function deleteCollection() {
	var dbResponse = document.getElementById('db-response');

	WeDeploy
		.data(data_endpoint)
		.delete('players')
		.then(function(){
			dbResponse.innerHTML = "The Database was deleted successfully.";
		})
		.catch(function(err){
			dbResponse.innerHTML = "Something went wrong when trying to erase the database.";
			console.log(err)
		})
};

function getUsers() {
	WeDeploy
	    .data(auth_endpoint)
	    .auth('ce110a79-59f4-4a5d-b005-576fd6b846e2')
	    .get('users')
	    .then(function(users) {
	    	// var userList = [];
	    	// var i = 0;

	    	// for (i = 0; i < users.length; ++i) {
	    	// 	userList.push(users[i].data_);
	    	// };

	    	showUserList(users);

	    })
	    .catch(function(err) {
	    	console.log(err)
	    });
};

function showUserList(showList) {
	var list = '';

	showList.forEach(function(user) {
		list += '<tr>' +
			'<td class="user-name">' + user.name + '</td>' +
			'<td class="user-email">' + user.email + '</td>' +
			'<tr>'
	});

	var populatedList = '<thead>' +
				'<th class="name">Name</th>' +
				'<th class="email">Email</th>' +
				'</thead>' +
				'<tbody class="user-list-entries">' +
				list +
				'</tbody>';

	document.querySelector('.user-list').innerHTML = populatedList;
};