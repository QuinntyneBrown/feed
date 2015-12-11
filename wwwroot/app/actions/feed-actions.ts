class FeedActions {

    constructor(private dispatcher, private feedService, private guid) { }

    get(username = "quinntynebrown") {
        var guid = this.guid();
        this.feedService.get({ username: username }).then(results => {
            this.dispatcher.emit({
                actionType: "FEED_FETCHED",
                options: {
                    id: guid,
                    data: results
                }
            });
        });
        return guid;
    }

}

angular.module("app").service("feedActions", ["dispatcher","feedService","guid",FeedActions]); 