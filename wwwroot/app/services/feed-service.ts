class FeedService {
    constructor(private fetch) { }

    get(options) {
        return this.fetch.fromServiceOrCache({ url: "", method: "GET" }).then( results => {
            return results.data;
        });
    }
}


angular.module("app").service("feedService", ["fetch", FeedService]); 