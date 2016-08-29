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

angular.module('ReeganExE')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notFound', {
        url: '/404',
        templateUrl: 'views/not-found/404.html'
      });
  });
