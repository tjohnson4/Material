
window.addEventListener('polymer-ready', function(e) {
    window.TemplateLoader = document.querySelector("tsj4-bb-template-loader");
    window.TemplateLoader.PATH = "templates";

    App.init();
});