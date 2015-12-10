class FeedActions {

    constructor(dispatcher, private feedService: FeedService) {
        
    }

    get() {

    }
}

angular.module("app").service("feedActions", ["dispatcher","feedService",FeedActions]); 