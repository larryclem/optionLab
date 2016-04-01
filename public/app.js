angular.module('optionLab', ['ui.router'])

  .config(function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('landing', {
          url: '/',
          templateUrl: '/components/landing/landingView.html',
          controller: 'landingCtrl'
      })
      .state('createDecision', {
          url: '/decide/create',
          templateUrl: '/components/decide/createDecisionView.html',
          controller: 'decideCtrl'
      })
      .state('setFactors', {
          url: '/decide/:decishID/factors',
          templateUrl: '/components/decide/createFactorsView.html',
          controller: 'decideCtrl'
      })
      .state('rateOptions', {
          url: '/decide/:decishID/:optionID/rate',
          templateUrl: '/components/decide/rateOptionsView.html',
          controller: 'decideCtrl'
      })
      .state('results', {
          url: '/decision/:decishID/results',
          templateUrl: '/components/decide/resultsView.html',
          controller: 'decideCtrl'
      })

  });
