angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {

})

.controller('mapPageCtrl', function($scope) {

    var app = angular.module('myapp', ['ngMap']);

    /** @constructor */
    function CoordMapType2() {
      this.tileSize = new google.maps.Size(256, 256);
    }

    /*'mapPageCtrl.prototype.getTile = function (coord, zoom, ownerDocument) {
      var div = ownerDocument.createElement('div');
      div.innerHTML = coord;
      div.style.width = this.tileSize.width + 'px';
      div.style.height = this.tileSize.height + 'px';
      div.style.fontSize = '10';
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '1px';
      div.style.borderColor = '#AAAAAA';
      return div;

  }*/

   function initialize() {
      var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      //Marker + infowindow + angularjs compiled ng-click
      var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
      var compiled = $compile(contentString)($scope);

      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      $scope.map = map;
    }
    ionic.Platform.ready(initialize);

    $scope.centerOnMe = function() {
      if(!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $scope.loading.hide();
      }, function(error) {
        alert('Unable to get location: ' + error.message);
      });
    };

    $scope.clickTest = function() {
      alert('Example of infowindow with ng-click')
    };

  })

.controller('settingsDefaultPageCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})

.controller('registerCtrl', function($scope) {

})

.controller('pageForSchoolCtrl', function($scope) {

})

.controller('beforeYouComeWindsorCtrl', function($scope) {

})

.controller('myAccountCtrl', function($scope) {

})

.controller('myProfileCtrl', function($scope) {


})

.controller('myCollectionCtrl', function($scope) {

})

.controller('editMyProfileCtrl', function($scope) {

})

.controller('editMyCollectionCtrl', function($scope) {

})
