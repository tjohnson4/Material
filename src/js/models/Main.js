App.Main = Backbone.Model.extend({

    defaults : {
        startRoute : undefined
    },

    initialize : function () {
        console.log("Main.initialize");

        this.bindCollections();
    },

    bindCollections : function () {
        console.log("Main.bindCollections");

        var menu = new App.MenuList();
        menu.fetch({
            success : function () {
                var data = menu.toJSON();
                console.log("Main.bindCollections", data);

                var template = document.querySelector('template[is="auto-binding"]');
                template.pages = data;

                var navicon = document.getElementById("navicon"),
                    drawer = document.getElementById("drawerPanel");

                navicon.addEventListener("click", function () {
                    drawer.togglePanel();
                });
            },
            error : function (e) {
                console.log("Router.start, fetch error", e);
            }
        });
    }
});