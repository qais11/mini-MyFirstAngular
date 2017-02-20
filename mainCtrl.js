angular.module('friendsList')
.controller('mainCtrl', function($scope){
 $scope.name = "Tyler"
 $scope.friends = ['qais','samir','cihan','sajad']
 $scope.addFriend = function(friend){
   $scope.friends.push(friend);
 }
})
