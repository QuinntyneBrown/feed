class FeedList {
    constructor($routeParams, dispatcher, feedActions, feedStore) {

    }

    static canActivate = () => {
        return [];
    }
}

ngX.Component({
    component: FeedList,
    providers: ["$routeParams","dispatcher","feedActions","feedStore"],
    template: [""].join(" ")
}); 