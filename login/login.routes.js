export default function routing ($routeProvider) {
  $routeProvider
  .when('/login', {
    controller: 'LoginController',
    templateUrl: '/login/login.html'
  })
};
