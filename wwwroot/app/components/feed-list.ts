class FeedListComponent {
    constructor(private $location, private $routeParams, private feedStore) { }

    username:string;

    get feedItems() {
        return this.feedStore.items.filter(item => {
            this.$routeParams.username = this.$routeParams.username || "quinntynebrown";            
            return item.owner.login.toLowerCase() === this.$routeParams.username.toLowerCase();
        });
    }
    
    onClick() { this.$location.path("/" + this.username); }
    
    static canActivate = () => {        
        return ["$q", "$route", "dispatcher", "feedActions", ($q, $route, dispatcher, feedActions) => {
            var deferred = $q.defer();            
            var actionId = feedActions.get($route.current.params.username);
            var listenerId = dispatcher.addListener({
                actionType: "CHANGE",
                callback: options => {
                    if (actionId === options.id) {                        
                        dispatcher.removeListener({ id: listenerId });
                        deferred.resolve();
                    }
                }
            });
            return deferred.promise;
        }];
    }
}

ngX.Component({
    component: FeedListComponent,
    styles: [" .feedList { }"].join(),
    providers: ["$location","$routeParams","feedStore"],
    template: [
        "<div>",
        "   <h1>Feed List</h1>",       
        "   <div>",
        "       <input type='text' data-ng-model='vm.username'></input>",
        "       <button data-ng-click='vm.onClick()'>query</button>",
        "   </div>",
        "   <div data-ng-repeat='feedItem in vm.feedItems'>",
        "       <p>{{ feedItem.full_name }}</p>",
        "   </div>",
        "</div>"
    ].join(" ")
}); 