import angular from 'angular'
import ngRoute from 'angular-route'

import routing from './objetivo.routes'
import ObjetivoController from './objetivo.controller'

export default angular.module('app.objetivo', [ngRoute])
  .config(routing)
  .controller('ObjetivoController', ObjetivoController)
  .name;