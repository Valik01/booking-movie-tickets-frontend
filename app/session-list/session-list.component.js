angular.
  module('sessionList').
  component('sessionList', {
    templateUrl: 'session-list/session-list.template.html',
    controller: ['$http', '$routeParams', 'userService',
      function SessionListController($http, $routeParams, userService) {
        var self = this;

        if (userService.getCurrentUser() === null) {
          window.location.href = 'http://localhost:8000/#!/login';
        }

        $http.get('http://localhost:8080/sessions/' + $routeParams.hallId,
          {
            headers: { 'Authorization': userService.getJwtToken() }
          }).then(function (response) {
            self.sessions = response.data;
          });

        self.logoutClick = function logoutClick(event) {
          userService.logoutCurrentUser();
          window.location.href = 'http://localhost:8000/#!/login';
        };
      }
    ]
  });