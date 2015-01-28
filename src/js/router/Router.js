App.Router = Backbone.Router.extend({
    routes: {
        "start"    : "start",
        "help"     : "help",
        "discover" : "discover",
        "account"  : "account"
    },

    start : function () {
        console.log("start");

        App.menuView.collection.fetch({
            success : function () {
                App.menuView.render();
            },
            error : function () {
                console.log("error")
            }
        })
    },

    account : function () {
        console.log("account");
    },

    discover : function () {
        console.log("discover");
    },

    help: function() {
        console.log("help");
    }
});