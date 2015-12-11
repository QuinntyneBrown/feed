class FeedStore {

    constructor(dispatcher, store) {
        this.storeInstance = store.createInstance();
        dispatcher.addListener({
            actionType: "FEED_FETCHED",
            callback: options => {
                for (var i = 0; i < options.data.length; i++) {
                    this.storeInstance.addOrUpdate({ data: options.data[i] });
                }
                this.storeInstance.emitChange({ id: options.id });
            }
        });
    }

    get items() { return this.storeInstance.items; }

    storeInstance: any;
}

angular.module("app").service("feedStore", ["dispatcher", "store", FeedStore])
    .run(["feedStore", feedStore => { }]);