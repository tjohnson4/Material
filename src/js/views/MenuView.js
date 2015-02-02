App.MenuView = Backbone.View.extend({
    el : "core-menu",

    template : "menu-view",

    render : function () {
        console.log("MenuView.render");
        var menu = document.querySelector(this.el);

        var data = {
            items : this.collection.toJSON()
        };

        console.log(window.TemplateLoader);

        var template = window.TemplateLoader.render(this.template, data);

        menu.innerHTML = template;

        menu.add
    }

});