/**
 * Created by Sufiyan on 3/31/2016.
 */
var app=angular.module('myApp',[]);

app.controller('tablescontroller', function ($scope) {
   $scope.student={
       firstName:"Sufiyan",
       lastName:"Bawany",
       fees:1000,

       subjects:[
           {name:'English',marks:65},
           {name:'Urdu', marks:85},
           {name:'Bio', marks:78},
           {name:'Chemistry',marks:67},
           {name:'Physics',marks:56}
       ],

       fullName:function () {
           var studentObject;
           studentObject = $scope.student;
           return studentObject.firstName + "   " + studentObject.lastName;
       }
       
       };

       });