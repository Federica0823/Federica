angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.home', {
      url: '/page2',
      views: {
        'tab4': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.mapPage', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/mapPage.html',
          controller: 'mapPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.settingsDefaultPage', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/settingsDefaultPage.html',
          controller: 'settingsDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/page5',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('register', {
      url: '/page6',
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl'
    })
        
      
    
      
        
    .state('pageForSchool', {
      url: '/page8',
      templateUrl: 'templates/pageForSchool.html',
      controller: 'pageForSchoolCtrl'
    })
        
      
    
      
        
    .state('tabsController.beforeYouComeWindsor', {
      url: '/page9',
      views: {
        'tab5': {
          templateUrl: 'templates/beforeYouComeWindsor.html',
          controller: 'beforeYouComeWindsorCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.myAccount', {
      url: '/page10',
      views: {
        'tab1': {
          templateUrl: 'templates/myAccount.html',
          controller: 'myAccountCtrl'
        }
      }
    })
        
      
    
      
        
    .state('myProfile', {
      url: '/page11',
      templateUrl: 'templates/myProfile.html',
      controller: 'myProfileCtrl'
    })
        
      
    
      
        
    .state('myCollection', {
      url: '/page12',
      templateUrl: 'templates/myCollection.html',
      controller: 'myCollectionCtrl'
    })
        
      
    
      
        
    .state('editMyProfile', {
      url: '/page13',
      templateUrl: 'templates/editMyProfile.html',
      controller: 'editMyProfileCtrl'
    })
        
      
    
      
        
    .state('editMyCollection', {
      url: '/page14',
      templateUrl: 'templates/editMyCollection.html',
      controller: 'editMyCollectionCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page2');

});
