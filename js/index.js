angular.module('wsCalcApp', ['ngMessages'])
	.controller('wsCalcCtrl', function($scope) {
		// Defining variables
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