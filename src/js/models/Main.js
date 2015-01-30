App.Main = Backbone.Model.extend({

    defaults : {
        startRoute : undefined
    },

    initialize : function () {
        console.log("Main.initialize");

        this.createViews();
        this.createRouter();
    },

    createViews : function () {
        console.log("Main.createViews");

        App.menuView = new App.MenuView({collection : new App.MenuList()});
        App.galleryView = new App.GalleryView({collection : new App.GalleryList()});
    },

    createRouter : function () {
        var startRoute = this.get("startRoute") || "start";
        console.log("Main.createRouter, start route : "+startRoute);

        App.router = new App.Router();
        Backbone.history.start();

        App.router.navigate(startRoute, {trigger:true});
    }
});