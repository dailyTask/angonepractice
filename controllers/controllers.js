    /**
 * Created by Sufiyan on 3/28/2016.
 */
    var mainApp = angular.module("mainApp", []);

    mainApp.controller('studentController', function($scope) {
        $scope.student = {
            firstName: "Mahesh",
            lastName: "Parashar",

            fullName: function() {
                var studentObject;
                studentObject = $scope.student;
                return studentObject.firstName + " " + studentObject.lastName;
            }
        };
    });