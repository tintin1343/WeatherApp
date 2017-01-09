// CUSTOM DIRECTIVES
weatherApp.directive('forecastDay', function(){
    return {
        restrict : 'E',
        templateUrl : 'directive/forecast-day.html',
        replace: 'true',
        scope: {
            weatherDay: "=",
            convertToStandard : "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});
