var data_endpoint = "db-codemotiongame.wedeploy.io";
var auth_endpoint = "auth-codemotiongame.wedeploy.io";

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
	    .auth('1635fefd-b19f-4f7a-a25a-734270f4f252')
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