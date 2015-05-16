var WSCALC = angular.module('wsCalcApp', ['ngMessages', 'ngRoute']);


WSCALC.factory('info', function() {
	return {
		data:  {
			basePrice: undefined,
			taxRate:   undefined,
			tipRate:   undefined,
			subtotal:  0,
			tip:       0,
			total:     0,
			totalTip:  0,
			mealCount: 0
		}
	}
});


WSCALC.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'homeCtrl'
		})
		.when('/new-meal', {
			templateUrl: 'new-meal.html',
			controller: 'wsCalcCtrl'
		})
		.when('/my-earnings', {
			templateUrl: 'my-earnings.html',
			controller: 'wsCalcCtrl'
		})
		.otherwise('/');
}]);


WSCALC.controller('navCtrl', function($scope, $location) {
	switch($location.path()) {
		case '/':
			console.log('case 1');
			$scope.view = 1;
			break;
		case '/new-meal':
			console.log('case 2');
			$scope.view = 2;
			break;
		case '/my-earnings':
			console.log('case 3');
			$scope.view = 3;
			break;
		default:
			console.log('case 4');
			$scope.view = 1;
	}
});


WSCALC.controller('homeCtrl', function($scope) {
	//
});


WSCALC.controller('wsCalcCtrl', function($scope, info) {
	// Defining variables
	$scope.data = {
		basePrice: info.data.basePrice,
		taxRate:   info.data.taxRate,
		tipRate:   info.data.tipRate,
		subtotal:  info.data.subtotal,
		tip:       info.data.tip,
		total:     info.data.total,
		totalTip:  info.data.totalTip,
		mealCount: info.data.mealCount
	};

	$scope.clearNumbers = function() {
		$scope.data.basePrice = undefined;
		$scope.data.taxRate   = undefined;
		$scope.data.tipRate   = undefined;
		$scope.formMealDetails.$setPristine();
		$scope.formMealDetails.$setUntouched();
	};

	$scope.submitNumbers = function() {
		if ($scope.formMealDetails.$valid) {
			$scope.data.basePrice = parseFloat($scope.data.basePrice);
			$scope.data.taxRate   = parseFloat($scope.data.taxRate);
			$scope.data.tipRate   = parseFloat($scope.data.tipRate);
			$scope.data.subtotal  = $scope.data.basePrice + ($scope.data.basePrice * $scope.data.taxRate/100);
			$scope.data.tip       = $scope.data.basePrice * ($scope.data.tipRate/100);
			$scope.data.total     = $scope.data.subtotal  +  $scope.data.tip;
			$scope.data.totalTip += $scope.data.tip;
			$scope.data.mealCount++;
			$scope.formMealDetails.$setPristine();
			$scope.formMealDetails.$setUntouched();
			// Update factory
			info.data.basePrice = $scope.data.basePrice;
			info.data.taxRate   = $scope.data.taxRate;
			info.data.tipRate   = $scope.data.tipRate;
			info.data.subtotal  = $scope.data.subtotal;
			info.data.tip       = $scope.data.tip;
			info.data.total     = $scope.data.total;
			info.data.totalTip  = $scope.data.totalTip;
			info.data.mealCount = $scope.data.mealCount;
		}
		else {
			console.log("One or more field is invalid");
		}
	};

	$scope.resetNumbers = function() {
		$scope.data = {
			basePrice: undefined,
			taxRate:   undefined,
			tipRate:   undefined,
			subtotal:  0,
			tip:       0,
			total:     0,
			totalTip:  0,
			mealCount: 0
		};
		$scope.formMealDetails.$setPristine();
	};

});