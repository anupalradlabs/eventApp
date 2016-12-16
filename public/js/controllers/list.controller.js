angular.module('app').controller('List',[
	'$scope','$timeout',
	function($scope,$timeout){
		console.log(firebase);
		var database = firebase.database();

		var eventsRef = database.ref('events');

		eventsRef.on('value',function(eventsSnap){
			$timeout(function(){
				$scope.events=eventsSnap.val();
			},0);
		});

		$scope.upload = function(event){
			eventsRef.push(event);
		}
	}
]);
