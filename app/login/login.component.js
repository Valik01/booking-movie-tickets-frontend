angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['$http', 'userService',
      function LoginController($http, userService) {
        var self = this;

        self.loginClick = function loginClick(event) {
          if (isEmpty(self.login) || isEmpty(self.password)) {
            console.log(false);
          } else {

            const loginRequest = {
              "login": self.login,
              "password": self.password
            }

            $http.post('http://localhost:8080/login', loginRequest).then(function (response) {
              window.location.href = 'http://localhost:8000/#!/cinemas';
              userService.loginByCredentials(response);
            });
          }

          function isEmpty(string) {
            return (!string || 0 === string.length || !string.trim());
          }
        }
      }
    ]
  });