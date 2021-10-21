 
var queried = window. prompt("Enter your query: "); 
fetch(`https://api.github.com/search/repositories?q=${queried}`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
insightData(data);
})
.catch(function (err) {
console.log('error: ' + err);
});
    function insightData(data){
    post = data
    for (let j = 1; j < 6 ; j++) {
		fetch(`${post.items[j].owner.url}`).then(function (response) {
		if (response.ok) {
			
			return response.json();
		} else {
			return Promise.reject(response);
		}
		}).then(function (FData) {
		
		console.log("i :" +j);
		console.log("follower" +FData.followers);
		Followers = FData.followers;
		Following = FData.following;
		var l = post.items[j].license; 
		
		let str = post.items[j].branches_url;
		str = str.slice(0,- 9);
		console.log("the changed url "+str);
		return fetch(``);
			}).then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					return Promise.reject(response);
				}
			}).then(function (BData) {
				BranchD = BData

				console.log("Name: " +post.items[j].name)
				console.log("Score: " +post.items[j].score),
				console.log("Full Name: " +post.items[j].full_name)
				console.log("Private: " + post.items[j].private)
				console.log("Login: " + post.items[j].owner.login)
				console.log("Followers: "+Followers)
				console.log("Following: "+Following)
				console.log("Branches: " +BData.length); 
			
		}).catch(function (error) {
		console.warn(error);
		});	
	
    }   
}

 


// document.getElementById('name').textContent = "name: "+post.items[j].name;
	// document.getElementById('score').textContent = "score: "+post.items[j].score;
	// document.getElementById('fullname').textContent = "full_name: " +post.items[j].full_name;
	// document.getElementById('priv').textContent = "private: " +post.items[j].private;
	// document.getElementById('loginx').textContent =  "login: " +post.items[j].owner.login;
	// document.getElementById('followers').textContent = "Followers: " +postx.length; -->
// if ( l === null){
	// 	document.getElementById('license').textContent =  "license: null" ;     
	// 	console.log('license: ' + post.items[i].license);
	//  }
    // else{
	// 	document.getElementById('license').textContent =  "license: " +post.items[i].license.name;     
	// 	console.log('license: ' + post.items[i].license.name);
    //      }https://api.github.com/repos/${post.items[j].full_name}/branches