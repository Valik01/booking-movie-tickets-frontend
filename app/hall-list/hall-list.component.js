angular.
  module('hallList').
  component('hallList', {
    templateUrl: 'hall-list/hall-list.template.html',
    controller: ['$http', '$routeParams', 'userService',
      function HallListController($http, $routeParams, userService) {
        var self = this;

        if (userService.getCurrentUser() === null) {
          window.location.href = 'http://localhost:8000/#!/login';
        }

        $http.get('http://localhost:8080/cinemas/' + $routeParams.cinemaId + '/halls',
          {
            headers: { 'Authorization': userService.getJwtToken() }
          }).then(function (response) {
            self.halls = response.data;
          });

        self.logoutClick = function logoutClick(event) {
          userService.logoutCurrentUser();
          window.location.href = 'http://localhost:8000/#!/login';
        };
      }
    ]
  });