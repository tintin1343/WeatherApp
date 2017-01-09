// CUSTOM SERVICE
weatherApp.service('cityService', function(){
    var self= this;
    this.city = 'Boston, MA';
});

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.getWeather = function (city, days) {
        var weatherAPI =
            $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&appid=9cb603ceb7365c873a9e6efc6e22fad3", {
                    callback: "JSON_CALLBACK"
                },
                {get: {method: "JSONP"}});

        return weatherAPI.get({q: city, cnt: days});
    }

}]);

