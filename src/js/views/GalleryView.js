App.GalleryView = Backbone.View.extend({
    el : ".content",

    template : "gallery-view",

    render : function () {
        console.log("GalleryView.render");

        var data = {
            items : this.collection.toJSON()
        };

        var template = window.TemplateLoader.render(this.template, data);

        $(this.el).html(template);
    }
});