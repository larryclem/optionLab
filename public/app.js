angular.module('optionLab', ['ui.router', 'rzModule'])

  .config(function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/components/landing/landingView.html',
        controller: 'landingCtrl'
      })
      .state('dashboard', {
        url: '/user',
        templateUrl: '/components/decide/createDecisionView.html'
      })
      .state('decide', {
        abstract: true,
        url: '/decide',
        template: '<ui-view/>',
        controller: 'decideCtrl'
      })
      .state('decide.create', {
        url: '/create',
        templateUrl: '/components/decide/createDecisionView.html'
      })
      .state('decide.factors', {
        url: '/factors',
        templateUrl: '/components/decide/createFactorsView.html'
      })
      .state('decide.rateOptions', {
        url: '/rate-options',
        templateUrl: '/components/decide/rateOptionsView.html'
      })
      .state('decide.results', {
        url: '/results',
        templateUrl: '/components/decide/resultsView.html'
      })

  });

  // .state('decide', {
  //     url: '/decide/create',
  //     templateUrl: '/components/decide/createDecisionView.html',
  //     controller: 'decideCtrl'
  // })
  // .state('setFactors', {
  //     url: '/decide/:decishID/factors',
  //     templateUrl: '/components/decide/createFactorsView.html',
  //
  // })
  // .state('rateOptions', {
  //     url: '/decide/:decishID/:optionID/rate',
  //     templateUrl: '/components/decide/rateOptionsView.html',
  //     controller: 'decideCtrl'
  // })
  // .state('results', {
  //     url: '/decision/:decishID/results',
  //     templateUrl: '/components/decide/resultsView.html',
  //     controller: 'decideCtrl'
  // })
