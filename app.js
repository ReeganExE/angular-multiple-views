/**
 * Angular UI Router Multiple Views Example
 *
 * @author Ninh Pham
 * Website: https://ReeganExE.github.io/angular-multiple-views
 * Contact: dongian.rapclubkhtn@gmail.com
 *
 * https://www.facebook.com/ReeganExE
 * https://www.twitter.com/ReeganExE
 * https://www.google.com/+ReeganExE
 * https://github.com/ReeganExE
 * https://youtube.com/ReeganExE
 */

'use strict';

angular.module('ReeganExE', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'angular-loading-bar',
    'ui.bootstrap',
    'ngCookies'
  ])
  .config(function($locationProvider, $urlRouterProvider, cfpLoadingBarProvider) {

    // For any unmatched url, redirect to /404
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("404");
    // $locationProvider.html5Mode(true);

    cfpLoadingBarProvider.includeSpinner = false;
  });
