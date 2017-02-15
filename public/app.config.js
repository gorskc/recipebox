angular
  .module('recipebox')
  .config(config)
  .run(runFunction);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'MainCtrl'
        },
        'main': {
          templateUrl: 'main/main.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'login': {
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'register': {
          templateUrl: 'registration/register.html',
          controller: 'RegistrationCtrl'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('recipes', {
      url: '/recipes',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'recipes': {
          templateUrl: 'recipes/all-recipes.html',
          controller: 'RecipesCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$waitForSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('categories', {
      url: '/categories/{category}',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'categories': {
          templateUrl: 'categories/categories.html',
          controller: 'CategoriesCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('recipes.detail', {
      url: '/{id:[0-9]{1,8}}',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'sidebar': {
          templateUrl: 'nav/sidebar.html',
          controller: 'SidebarCtrl',
          controllerAs: 'recipes'
        },
        'detail': {
          templateUrl: 'view_recipe/recipe-detail.html',
          controller: 'ViewRecipeCtrl',
          controllerAs: 'recipe'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('new', {
      url: '/new',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'new': {
          templateUrl: 'new_recipe/new.html',
          controller: 'NewRecipeCtrl'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('show-new', {
      url: '/show-new',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'show-new': {
          templateUrl: 'show_new/show-new.html',
          controller: 'ShowNewCtrl'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('list', {
      url: '/list',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'list': {
          templateUrl: 'list/list.html',
          controller: 'ListCtrl',
          controllerAs: 'list'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('account', {
      url: '/account',
      views: {
        'account': {
          templateUrl: 'account/account.html',
          controller: 'AccountCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('logout', {
      url: '/logout',
      views: {
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'logout': {
          templateUrl: 'logout/logout.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('sitemap', {
      url: '/sitemap',
      views: {
        'sitemap': {
          templateUrl: 'sitemap/sitemap.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    });
  }

runFunction.$inject = ['$rootScope', '$state'];
function runFunction($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $state.go("home");
    }
  });
}
