<!--
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
 -->

(function() {
    'use strict';

    angular.module('ReeganExE')
      .controller('PostController', function(Posts) {

        var vm = this;

        angular.extend(vm, {
          name: 'Posts',
          posts: Posts
        });

      })

      .controller('PostDetailController', function(Post, $scope) {
        var vm = this;

        angular.extend(vm, {
          name: 'Post Detail',
          post: Post
        });

        $scope.$on('photo', function showPhoto(event, comment) {
          // comment is passed from CommentController
          // you can do something with it
          vm.activeTab = 2;
        });

      })

      .controller('PhotoController', function() {
        var vm = this,
            sample = {
              src: 'http://placehold.it/400x300'
            };

        angular.extend(vm, {
          name: 'Photos',
          photos: new Array(24).fill(sample)
        });
      })

      .controller('CommentController', function(Post, Comments, $uibModal, $scope) {
        var vm = this;

        angular.extend(vm, {
          name: 'Comments',
          post: Post,
          comments: Comments,
          showComment: showCommentAsModal,
          slideCmt: slideComment,
          showPhoto: showPhoto
        });

        function showPhoto(comment) {
          // Emit event to parent and pass a current comment instance
          $scope.$emit('photo', comment);
        }

        /**
         * Slide comment in list
         * @param  {Resource} cur       Current comment instance
         * @param  {Number} direction 1 for next, -1 for previous
         * @return {Resource}           A Resource or null
         */
        function slideComment(cur, direction) {
          let comments = vm.comments,
              index = comments.indexOf(cur) + direction,
              next = angular.extend(comments[index] || {}, {
                isLast: (index + 1) === comments.length,
                isFirst: index === 0
              });

          return next;
        }

        /**
         * Show comment as modal
         * @param  {Resource}  comment
         * @param  {Boolean} isLast  true if this is last comment
         * @param  {Boolean} isFirst true if this is first comment
         */
        function showCommentAsModal(comment, isLast, isFirst) {
          comment.isLast = isLast;
          comment.isFirst = isFirst;

          $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'views/posts/comment.modal.html',
            controller: ModalInstanceCtrl,
            controllerAs: 'vm',
            resolve: {
              comment: comment,
              next: () => vm.slideCmt
            }
          }).result.then(result => {
            result && result.action === 'show-photo' && vm.showPhoto(result.comment);
          });
        }

        /**
         * Controller for showing comment modal
         * @param {Resource}   comment
         * @param {Function} next              Next/Previous comment
         * @param {ModalInstance}   $uibModalInstance
         */
        function ModalInstanceCtrl(comment, next, $uibModalInstance) {
          var vm = this;
          vm.comment = comment;
          vm.dismiss = $uibModalInstance.dismiss;
          vm.close = $uibModalInstance.close;

          /**
           * Obtain pre/next comment
           * @param  {Number} direction 1 for next, -1 for previous
           */
          vm.next = (direction) => {
            if (vm.comment.isFirst && direction === -1) {
              return;
            }
            if (vm.comment.isLast && direction === 1) {
              return;
            }
            vm.comment = next(vm.comment, direction);
          };

          vm.showPhoto = () => {
            vm.close({
              action: 'show-photo',
              comment: vm.comment
            });
          };
        }

      });
})();