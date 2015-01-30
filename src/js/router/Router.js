App.Router = Backbone.Router.extend({
    routes: {
        "start"     : "start",
        "galleries" : "galleries",
        "discover"  : "discover",
        "account"   : "account"
    },

    start : function () {
        console.log("Router.start");

        App.menuView.collection.fetch({
            success : function () {
                App.menuView.render();
            },
            error : function (e) {
                console.log("Router.start, fetch error", e);
            }
        });
    },

    galleries : function () {
        console.log("Router.galleries");

        App.galleryView.collection.fetch({
            success : function () {
                App.galleryView.render();
            },
            error : function (e) {
                console.log("Router.galleries, fetch error", e);
            }
        })
    },

    discover : function () {
        console.log("Router.discover");
    },

    help: function() {
        console.log("Router.help");
    }
});