App.SplashView = Backbone.View.extend({
    template : "splash-view",

    render : function () {
        var template = TemplateLoader.render(this.template);

        $(this.el).html(template);
    }
});