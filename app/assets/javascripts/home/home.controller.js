// (function() {
//
//     'use strict';
//
//     function HomeController($scope, Auth, $state) {
    //     var vm = this
    //
    //     activate();
    //
    //     function activate() {
    //         getCurrentUser()
    //     }
    //
    //     function getCurrentUser() {
    //         return Auth.currentUser()
    //                    .then(setCurrentUser)
    //     }
    //
    //     function setCurrentUser(user) {
    //         return vm.user = user;
    //     };
    //
    //     $scope.$on('devise:new-registration', function(e, user){
    //         return vm.user = user;
    //     });
    //     $scope.$on('devise:login', function(e, user){
    //         return vm.user = user;
    //     });
    //     $scope.$on('devise:logout', function(e, user){
    //         return vm.user = {};
    //     });
    //
    // }
    //
    // HomeController.$inject = ['$scope', 'Auth', '$state']
//
//     angular
//         .module('auto4n')
//         .controller('HomeController', HomeController)
//
// }());
