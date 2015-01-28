window.App = {
    init: function() {

        var hash = window.location.hash;
        App.main = new App.Main({startRoute : hash});
    }
};