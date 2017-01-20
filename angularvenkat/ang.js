var app = angular.module('myApp',[]);

app.controller('myController',function($scope) {
    $scope.message="testing"
    $scope.rowlimit=3;
    $scope.sortCol="name";
    var technologies =[
        {name:"C#",likes:0,dislikes:0},
        {name:"ASP net",likes:0,dislikes:0},
        {name:"Java",likes:0,dislikes:0},
        {name:"Nodejs",likes:0,dislikes:0}        
        ];

    var employess=[
            {name:"ben",dateOfBirth:new Date("November 23, 1980"),gender:"male",salary:55000.78},
            {name:"ken",dateOfBirth:new Date("November 23, 1983"),gender:"female",salary:534560.78},
            {name:"hen",dateOfBirth:new Date("November 23, 1973"),gender:"female",salary:634560.78},
            {name:"gun",dateOfBirth:new Date("November 23, 1963"),gender:"female",salary:734560.78},
            {name:"fun",dateOfBirth:new Date("November 23, 1993"),gender:"female",salary:834560.78},

    ];
    $scope.employess=employess

        $scope.technologies=technologies;
        $scope.incrementLike=function(technology){
            technology.likes++;
        }
        $scope.incrementdisLike=function(technology){
            technology.dislikes++;
        }
});