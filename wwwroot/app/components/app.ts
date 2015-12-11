class AppComponent {
    constructor() {

    }
}

ngX.Component({
    selector: "app",
    component: AppComponent,
    template: [
        "<div class='app'>",
        "   <div class='mainContent' data-ng-view>",
        "</div>"
    ].join(" ")
}); 