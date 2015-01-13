angular.module("county-log", [])
	.controller("MainCtrl", [
		"$scope",
		function($scope) {
			$scope.test = "Hello World!";

			$scope.entries = [
				{id: '1' , name: 'New Haven'},
				{id: '2' , name: 'King'},
				{id: '3' , name: 'Fulton'}
			];

			$scope.addEntry = function() {
				$scope.entries.push({id: '0', name: 'New'})
			}
}]);


