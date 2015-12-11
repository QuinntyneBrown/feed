class FeedService {
    constructor(private fetch) { }

    get(options) {
        return this.fetch.fromService({ url: "https://api.github.com/users/" + options.username + "/repos?per_page=100", method: "GET" }).then( results => {
            return results.data;
        });
    }
}

angular.module("app").service("feedService", ["fetch", FeedService]); 