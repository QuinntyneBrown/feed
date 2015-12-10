class FeedList {
    constructor(feedStore) {

    }

    static canActivate = () => {
        return [];
    }
}

ngX.Component({
    component: FeedList,
    providers:["dispatcher"],
    template: [""].join(" ")
}); 