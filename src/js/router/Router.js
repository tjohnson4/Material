App.Router = Backbone.Router.extend({
    routes: {
        "/"        : "start",
        "help"     : "help",
        "discover" : "discover",
        "account"  : "account"
    },

    start : function () {
        console.log("start");
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