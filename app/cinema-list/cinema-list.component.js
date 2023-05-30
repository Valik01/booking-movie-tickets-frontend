'use strict';

angular.
  module('cinemaList').
  component('cinemaList', {
    templateUrl: 'cinema-list/cinema-list.template.html',
    controller: ['$http', 'userService', function CinemaListController($http, userService) {
      var self = this;

      if (userService.getCurrentUser() === null) {
        window.location.href = 'http://localhost:8000/#!/login';
      }

      $http.get('http://localhost:8080/cinemas',
        {
          headers: { 'Authorization': userService.getJwtToken() }
        }).then(function (response) {
          self.cinemas = response.data;
        });

      self.logoutClick = function logoutClick(event) {
        userService.logoutCurrentUser();
        window.location.href = 'http://localhost:8000/#!/login';
      };
    }]
  });