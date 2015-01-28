App.Main = Backbone.Model.extend({

    defaults : {
        startRoute : undefined
    },

    initialize : function () {
        console.log("Main.initialize");

        this.createCollections();
        this.createViews();
        this.createRouter();
    },

    createCollections : function () {
        console.log("Main.createCollections");

        App.menu = new App.MenuList();
    },

    createViews : function () {
        console.log("Main.createViews");

        App.menuView = new App.MenuView({collection : App.menu});
    },

    createRouter : function () {
        var startRoute = this.get("startRoute");
        console.log("Main.createRouter, start route : "+startRoute);

        App.router = new App.Router();
        Backbone.history.start();

        if (!startRoute) {
            App.router.navigate("start", {trigger:true});
        } else {
            App.router.navigate(startRoute, {trigger:true});
        }
    }
});