angular.module("app", ["ngX"])
.config(["$routeProvider", ($routeProvider) => {

    $routeProvider.when("/", {
        "componentName": "feedList"
    });

}]);