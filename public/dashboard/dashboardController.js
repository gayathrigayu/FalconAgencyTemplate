'use strict';

/*Login Controller*/
var dashboardController = angular.module('dashboardController', []);

dashboardController.controller('dashboardCtrl', ['$scope', '$http', '$state', '$location', '$rootScope', '$modal', '$anchorScroll',
    function($scope, $http, $state, $location, $rootScope, $modal , $anchorScroll) {
        $scope.name = 'World';

       $http.get('json/pacakage.json').success(function(data) {
            $scope.carousellist = data.carousel;
        });

       $scope.gotoAnchor = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    $scope.showmobile = function() {
        if($scope.showmobileflag == undefined)
            $scope.showmobileflag = true
        else if($scope.showmobileflag)
            $scope.showmobileflag = false
        else
            $scope.showmobileflag = true


    }

    var modalInstance = $modal.open({
                templateUrl: 'public/common/popup.html',
                controller: 'popupCtrl',
                controllerAs: 'vm',
                size: true,
                windowClass: "backdrop-modal-remove ",
                backdrop: 'static',
                keyboard: false
            }).result.then(function(result) {
                if (result != 'cancel') {

                }

            });



    }
]);
dashboardController.controller('popupCtrl', ['$scope', '$http', '$state', '$location', '$rootScope', '$modal', '$modalInstance',
    function($scope, $http, $state, $location, $rootScope, $modal, $modalInstance) {
        $scope.modalInstance = $modalInstance;

         $http.get('json/popup.json').success(function(data) {
            $scope.popupdata = data;
        });

        $scope.dismiss = function() {
            $scope.modalInstance.close('cancel');
        }

    }
]);
dashboardController.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])
