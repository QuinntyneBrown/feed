class FeedListComponent {
    constructor(private $location, $routeParams, private dispatcher, feedActions, feedStore) {        
        this.feedItems = feedStore.items.filter(item => {
            if ($routeParams.username) {
                return item.owner.login.toLowerCase() === $routeParams.username;
            }
            return item.owner.login.toLowerCase() === "quinntynebrown";
        });
        this.listenerId = dispatcher.addListener({
            actionType: "CHANGE",
            callback: options => {
                this.feedItems = feedStore.items.filter(item => {
                    return item.owner.login.toLowerCase() === $routeParams || "quinntynebrown";
                });
            }
        });
    }

    username;

    feedItems;
    
    listenerId;

    query() {
        this.$location.path("/" + this.username);
    }

    deactivate() {
        this.dispatcher.removeListener({ id: this.listenerId });
    }

    static canActivate = () => {        
        return ["$q", "$route", "dispatcher", "feedActions", ($q, $route, dispatcher, feedActions) => {
            var deferred = $q.defer();            
            var actionId = feedActions.get({ username: $route.current.params.username || "quinntynebrown" });
            var listenerId = dispatcher.addListener({
                actionType: "CHANGE",
                callback: options => {
                    if (actionId === options.id) {
                        deferred.resolve(true);
                        dispatcher.removeListener({ id: listenerId });
                    }
                }
            });
            return deferred.promise;
        }];
    }
}

ngX.Component({
    component: FeedListComponent,
    styles: [" .feedList {}"].join(),
    providers: ["$location","$routeParams","dispatcher","feedActions","feedStore"],
    template: [
        "<div>",
        "<h1>Feed List</h1>",


        "<div>",
        "<input type='text' data-ng-model='vm.username'></input>",
        "<button data-ng-click='vm.query()'>query</button>",
        "</div>",

        "<div data-ng-repeat='feedItem in vm.feedItems'>",
        "<p>{{ feedItem.full_name }}</p>",
        "</div>",

        "</div>"
    ].join(" ")
}); 