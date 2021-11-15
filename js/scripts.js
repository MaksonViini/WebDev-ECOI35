window.angular && angular.module('donate', ['ui.mask'])
  .config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: false
    });
  }])

  .controller('mainController', ['$scope', 'anchorSmoothScroll', function ($scope, anchorSmoothScroll) {

    $scope.content = window.pageContent;

  }])

  // Servico e a funcao do dim dim
  .service('anchorSmoothScroll', function () {

    this.scrollTo = function (eID) {

      function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        } return y;
      }

    };
  })
