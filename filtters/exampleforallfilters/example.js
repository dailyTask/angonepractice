/**
 * Created by Sufiyan on 3/31/2016.
 */
var app=angular.module('myApp',[]);

app.controller('marksController', function ($scope) {
    $scope.student = {
        firstName: "Mahesh",
        lastName: "Parashar",
        fees:500,

        subjects:[
            {name:'Physics',marks:70},
            {name:'Chemistry',marks:80},
            {name:'Math',marks:65}
        ],

        fullName: function() {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };


});


