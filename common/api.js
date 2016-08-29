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

    angular.module('ReeganExE')
        .factory('PostService', function(URL, $resource) {
            return $resource(URL.posts, { _limit : 20 });
        }).factory('CommentService', function(URL, $resource) {
            return $resource(URL.comments, { _limit : 30 });
        });
})();