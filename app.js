var appRoot = angular.module('myApp', []);
appRoot.controller('AppController', ['$scope', 'ImageService', function ($scope, ImageService) {
  $scope.vm = {};
  $scope.vm.message = "Welcome to angular js directive";
  $scope.vm.imageUrl;
  $scope.vm.imageUrls = ImageService.getImages();
  $scope.addImage = function () {
    ImageService.createImage($scope.vm.imageUrl);
    console.log($scope.vm.imageUrls);
    $scope.vm.imageUrl=null;
  }
  $scope.vm.removeImage = function removeImage(imageUrl) {
    if (imageUrl) {
      ImageService.deleteImage(imageUrl);
      console.log($scope.vm.imageUrls);
    }
  }


}]);