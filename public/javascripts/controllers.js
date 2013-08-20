
function AppCtrl($scope, $http, $location) {

}

function MenuCtrl($scope, $http, $location, socket) {


	$scope.isActive = function(route) {
		return route === $location.path();
	}

}


function EnvironmentCtrl($scope, $http, $location) {

}


function TrialCtrl($scope, $http, $location) {

}


function WateringCtrl($scope, $http, $location) {

}


function ReportsCtrl($scope, $http, $location) {

}


function JournalCtrl($scope, $http, $location) {

}


function DashboardCtrl($scope, $http, $location ,$window ,socket) 
{
 $scope.sen01 =[{ x: 0, y: 0 } ];
 // $scope.sen02 =[{ x: 0, y: 0 } ];
 // $scope.sen03 =[{ x: 0, y: 0 } ];
 // $scope.sen04 =[{ x: 0, y: 0 } ];

	$scope.graph01 = new Rickshaw.Graph( {
		element: document.querySelector("#sensor01"), 
		min:0,
		max:0,
		height: 200, 
		renderer: 'line',
		series: [{
			color: 'steelblue',
			data:  $scope.sen01
		 }]
	});

$scope.graph02 = new Rickshaw.Graph( {
		element: document.querySelector("#sensor02"), 
				min:0,
		max:0,
		height: 200, 
		renderer: 'line',
		series: [{
			color: 'red',
			data:  $scope.sen01
		 }]
	});

	$scope.graph03 = new Rickshaw.Graph( {
		element: document.querySelector("#sensor03"), 
		min:0,
		max:0,
		height: 200, 
		renderer: 'area',
		series: [{
			color: 'yellow',
			data:  $scope.sen01
		 }]
	});

$scope.graph04 = new Rickshaw.Graph( {
		element: document.querySelector("#sensor04"), 
				min:0,
		max:0,
		height: 200, 
		renderer: 'line',
		series: [{
			color: 'green',
			data:  $scope.sen01
		 }]
	});




	$scope.count=0;
	$scope.LIMITE=100;
	socket.on('receber', function (data) 
	{
		$scope.sen01.push({x:$scope.count,y:new Number(data.val_x)});
		$scope.count++;
		while ($scope.sen01.length> $scope.LIMITE)
			$scope.sen01.splice(0, 1);


		
		$scope.graph01.render();
		$scope.graph02.render();
		$scope.graph03.render();
		$scope.graph04.render();

	});


}


