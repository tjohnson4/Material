window.App = {
    init: function() {
        App.TemplateLoader = document.querySelector("tsj4-bb-template-loader");
        App.TemplateLoader.PATH = "templates";

        var hash = window.location.hash;
        App.main = new App.Main({startRoute : hash});
    }
};