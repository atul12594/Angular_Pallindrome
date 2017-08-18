(function(){	
	var app = angular.module('store', []); 
		app.controller('InputController', function ($scope, $http) {		
		/*
		* This method will be called on click event of button.
		* Here we will read the email and password value and call our PHP file.
		*/
			$scope.check_credentials = function () {
			$scope.val = document.getElementById("message").value;
			var inputvalue = $scope.val;
				var request = $http({
				    method: "post",
				    url: "./login.php",
				    data: $scope.val
					
					
				    })
				    .then(function (response) {
              				console.log(response.data);
              				// on success
              			    $scope.responseValue = response.data;
              
         			 }, function (response) {
              
              			// on error
              			console.log(response.data,response.status);
              
          			});

			}
	});
	
})();
