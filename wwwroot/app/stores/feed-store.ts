class FeedStore {

    constructor(private store) {

    }
}

angular.module("app").service("feedStore", ["store",FeedStore]); 