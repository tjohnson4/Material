App.SplashView = Backbone.View.extend({
    template : "splash-view",

    render : function () {
        var template = App.TemplateLoader.render(this.template);

        $(this.el).html(template);
    }
});