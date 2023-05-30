angular.
  module('registration').
  component('registration', {
    templateUrl: 'registration/registration.template.html',
    controller: ['$http',
      function RegistrationController($http) {
        var self = this;

        self.registrationClick = function registrationClick(event) {
          if (isEmpty(self.name) || isEmpty(self.surname) || isEmpty(self.login) ||
            isEmpty(self.email) || isEmpty(self.phone) ||
            isInvalidPassword(self.password, self.passwordRepeat)) {
            console.log(false);
          } else {
            const user = {
              "name": self.name,
              "surname": self.surname,
              "login": self.login,
              "email": self.email,
              "phone": self.phone,
              "password": self.password,
              "discount": "5",
              "systemRoleId": "2"
            }

            $http.post('http://localhost:8080/register', user).then(function (user) {
              window.location.href = 'http://localhost:8000/#!/login'
            });
          }
        }

        function isEmpty(string) {
          return (!string || 0 === string.length || !string.trim());
        }

        function isInvalidPassword(password, passwordRepeat) {
          return (isEmpty(password) || isEmpty(passwordRepeat) || !(passwordRepeat === password));
        }
      }
    ]
  });