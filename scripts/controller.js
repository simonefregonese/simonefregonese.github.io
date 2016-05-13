/**
 * Created by Sim2 on 12/05/2016.
 */

var app = angular.module('myApp', ['ngStorage'])
    .controller('homeController', function($scope, $localStorage, $sessionStorage){

        $scope.result = [];

        $scope.invia = function(testo){

            $scope.result.push(testo);
            $scope.data = new Date();
            $localStorage.result = $scope.result;
            $sessionStorage.result = $scope.result;
        };

        $
    });

    app.filter('reverse', function() {
        return function(result) {
            return result.slice().reverse();
    }

    });
