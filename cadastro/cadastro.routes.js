export default function routes($routeProvider) {
  $routeProvider
    .when('/cadastro', {
        controller: 'CadastroController',
        templateUrl: '/cadastro/cadastro.html'
    })
}
