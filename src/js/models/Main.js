App.Main = Backbone.Model.extend({

    initialize : function () {
        this.createCollections();
        this.createRouter();
    },

    createCollections : function () {
        App.menu = new App.MenuList();
    },

    createRouter : function () {
        App.router = new App.Router();
    }


});