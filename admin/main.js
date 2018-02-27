const project_id = "projectID";
const master_token = "masterToken";

document.getElementById("delete-db").addEventListener("click", deleteCollection);
document.getElementById("get-user-list").addEventListener("click", getUsers);

function deleteCollection() {
	var dbResponse = document.getElementById('db-response');

	WeDeploy
		.data(`db-${project_id}.wedeploy.io`)
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
	    .data(`auth-${project_id}.wedeploy.io`)
	    .auth(master_token)
	    .get('users')
	    .then(function(users) {
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