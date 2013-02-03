function usersController($scope, $http) {
  $scope.usersGET = function(){
  	$http(
  	{
  	  method: 'GET', 
  	  url: 'http://localhost:8000/users', 
  	  headers: {'Content-Type': 'application/json'}
  	}
  	).
    success(function(data, status, headers, config) {
      $scope.users = data;
    }).
    error(function(data, status, headers, config) {
      $scope.users = data;
    });
   }
}
function signupController($scope, $http, $location) {
  $scope.user = {};
  $scope.usersPOST = function(){
    $http(
  	  {
  	    method: 'POST', 
  	    url: 'http://localhost:8000/users', 
  	    data: $scope.user, 
  	    headers: {'Content-Type': 'application/json'}
  	  }).success(function(data, status, headers, config) {
        alert(data);
        if(data == '"User created"'){
        	$location.path("index.html");
        }
        
      }).
      error(function(data, status, headers, config) {
        alert('Error: Server Failed');
      });
  }
}
function loginController($scope, $http) {
  $scope.usersQueryGET = function(){
    // or POST data to server and check there
    $http(
      {
        method: 'GET', 
        url: 'http://localhost:8000/users?username=' + $scope.username, 
        headers: {'Content-Type': 'application/json'}
      }).success(function(data, status, headers, config) {
        if(data == '"Query field invalid."'){
          alert('Username invalid');
        }else{
          alert('Username is valid')
          //POST password to server and check is bcrypt hash is the same
            localStorage.setItem('logged_in', 'true');
            localStorage.username = $scope.username;
            $('#login').hide();
            loginLayer.hide()
            main();            
          
        }
      }).
      error(function(data, status, headers, config) {
        alert('Error: Server Failed');
      });

    

    /*$http(
      {
        method: 'GET', 
  	    url: 'http://localhost:8000/users?username=' + $scope.user.username, 
  	    headers: {'Content-Type': 'application/json'}
  	  }
  	).
    success(function(data, status, headers, config) {
      alert(data)
    }).
    error(function(data, status, headers, config) {
      alert(data)	
    });
    )*/
  }
}
