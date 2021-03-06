App.MenuList = Backbone.Collection.extend({
    model : App.MenuItem,

    url : "/api/v1/menu",

    parse : function (res) {
        var items = [];

        if (res.hasOwnProperty("items") && res.items)
            items = res.items;

        return items;
    }
});