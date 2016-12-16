angular.module('app').config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'/view/events/list.html',
			controller:'List'
		});
	}]);
