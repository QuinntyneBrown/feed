class FeedStore {

    constructor(private dispatcher, private store) {

    }
}

angular.module("app").service("feedStore", ["dispatcher","store",FeedStore]); 