/**
 * Created by Sim2 on 12/05/2016.
 */

var app = angular.module('myApp', [])
    .controller('homeController', function($scope){

        $scope.result = [];

        $scope.invia = function(testo){

            $scope.result.push(testo);
        };
    });

    app.filter('reverse', function() {
        return function(result) {
            return result.slice().reverse();
    }

    });
