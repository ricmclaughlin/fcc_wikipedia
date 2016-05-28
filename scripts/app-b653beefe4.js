!function(){"use strict";angular.module("app",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","app.core"])}(),function(){"use strict";function e(e,i){function t(){}var a=this;a.articles=i.articles,a.article=i.article,t(),a.getArticles=function(e){i.clearSearch(),i.searchWiki(e)}}e.$inject=["$http","wikiSearchService"],angular.module("app").controller("MainController",e)}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";function e(e){function i(i){var t="",a=[],c="https://en.wikipedia.org/?curid=";return e.jsonp("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+i+"&callback=JSON_CALLBACK").success(function(e){a=e.query.pages,angular.forEach(a,function(e){t=angular.isUndefined(e.thumbnail)?null:e.thumbnail.source,r.push({title:e.title,extract:e.extract,url:c+e.pageid,image:t})})})}function t(){this.articles.length=0}var a={title:"this is a snippet",extract:"",url:"",image:""},r=[],c={searchWiki:i,clearSearch:t,article:a,articles:r};return c}e.$inject=["$http"],angular.module("app.core").factory("wikiSearchService",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("app").run(e)}(),function(){"use strict";function e(e,i){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}),i.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app")}(),function(){"use strict";function e(e,i){e.debugEnabled(!0),i.defaults.useXDomain=!0,i.defaults.withCredentials=!0,delete i.defaults.headers.common["X-Requested-With"],i.defaults.headers.common.Accept="application/json",i.defaults.headers.common["Content-Type"]="application/json"}e.$inject=["$logProvider","$httpProvider"],angular.module("app").config(e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class=container><div class="row top-space"><div><h1>Wikipedia Search App</h1></div><div class="container top-space"><form name=myForm ng-submit=vm.getArticles(search)><div class=row><div class=col-sm-6><input name=search type=text class="form-control btn-circle" ng-model=search required placeholder="Search Wikipedia for.."></div><div class=col-sm-6><a href=https://en.wikipedia.org/wiki/Special:Random role=button class="btn btn-default btn-circle">Random Article Please</a></div></div></form><div class="container top-space"><div class=row ng-repeat="article in vm.articles track by $index "><div class=bs-callout ng-class-even="\'bs-callout-info\'" ng-class-odd="\'bs-callout-success\'"><div class=row><div class=col-sm-8><h4><a href={{article.url}}>{{article.title}}</a></h4>{{article.extract}}</div><div class=col-sm-4><img ng-src={{article.image}} ng-alt={{article.title}}></div></div></div></div></div><p id=footer>Made with <span class=stylish>style</span> by <a href=http://ric.mclaughlin.today>Ric McLaughlin</a></p></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-b653beefe4.js.map
