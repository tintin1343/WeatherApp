// CONTROLLERS

//home controller
weatherApp.controller('homeController', ['$scope','$location','$log', 'cityService', function($scope, $location, $log, cityService){

    $scope.name = 'Home';
    $log.info('In Home');

    $scope.city = cityService.city;

    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });

    $log.info('City ' + $scope.city);

    $scope.submit = function() {
        $location.path('/forecast');
    }

}]);

//forecast controller
weatherApp.controller('forecastController', ['$scope','$log', '$routeParams', 'cityService', '$filter', 'weatherService',
    function($scope,$log, $routeParams ,cityService, $filter, weatherService ){

        $scope.name = 'Forecast';
        $scope.days = $routeParams.days || "2";
        $log.info('In Forecast');

        $scope.$watch('city', function(){
            cityService.city = $scope.city;
        });

        //calling city service
        $scope.city = cityService.city;
        $log.info('City selected is ' + $scope.city);

        //calling weather service
        $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
        $log.info($scope.weatherResult);

        // data sanitization functions
        $scope.convertToFahrenheit = function(degK){
            return Math.round(1.8 * (degK - 273) + 32)
        }
        $scope.convertToDate = function(date){
            return (new Date(date * 1000));
        }

    }]);