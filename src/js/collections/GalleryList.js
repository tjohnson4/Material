App.GalleryList = Backbone.Collection.extend({
    model : App.GalleryItem,

    url : "/api/v1/galleries",

    parse : function (res) {
        var items = [];

        if (res.hasOwnProperty("items") && res.items)
            items = res.items;

        return items;
    }
});