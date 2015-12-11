angular.module("app", ["ngX"])
.config(["$routeProvider", ($routeProvider) => {

    $routeProvider.when("/", {
        "componentName": "feedListComponent"
    });

    $routeProvider.when("/:username", {
        "componentName": "feedListComponent"
    });

}]);