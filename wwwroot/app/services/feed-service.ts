class FeedService {
    constructor(private fetch) { }

    get(options) {
        return this.fetch.fromService({ url: "https://api.github.com/users/" + options.username + "/repos", method: "GET" }).then( results => {
            return results.data;
        });
    }
}


angular.module("app").service("feedService", ["fetch", FeedService]); 