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

(function() {
    'use strict';

    var host = '//jsonplaceholder.typicode.com/';
    angular.module('ReeganExE')
        .constant('URL', {
            posts: `${host}posts/:id`,
            comments: `${host}comments?postId=:postId`
        });
})();