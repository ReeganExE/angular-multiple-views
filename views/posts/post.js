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
      .state('posts', {
        url: '/posts',
        templateUrl: 'views/posts/posts.list.html',
        controller: 'PostController',
        controllerAs: 'vm',
        resolve: {
          Posts: function (PostService) {
            return PostService.query();
          }
        }
      })

      .state('post_detail', {
        url: '/posts/{id}',
        abstract: true,
        params: {
          post: null
        },
        templateUrl: 'views/posts/posts.detail.html',
        controller: 'PostDetailController',
        controllerAs: 'vm',
        resolve: {
          Post: function (PostService, $stateParams) {
            return $stateParams.post || PostService.get({ id: $stateParams.id });
          }
        }
      })

      .state('post_detail.detail', {
        url: '',
        views: {
          comments: {
            templateUrl: 'views/posts/posts.comments.html',
            controller: 'CommentController',
            controllerAs: 'vm'
          },
          'add-comment': {
            templateUrl: 'views/posts/posts.comments.add.html',
            controller: 'CommentController',
            controllerAs: 'vm'
          },
          photos: {
            templateUrl: 'views/posts/posts.photos.html',
            controller: 'PhotoController',
            controllerAs: 'vm'
          }
        },
        resolve: {
          Comments: function(CommentService, $stateParams) {
            return CommentService.query({ postId: $stateParams.id });
          }
        }
      });
  });
