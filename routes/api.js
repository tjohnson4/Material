var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/menu', function(req, res, next) {
    res.json({
        items : [
            {
                label : "Galleries",
                icon : "account-box",
                hash : "galleries"
            },
            {
                label : "Discover",
                icon : "explore",
                hash : "discover"
            },
            {
                label : "Help",
                icon : "help",
                hash : "help"
            }
        ]
    });
});

/* GET users listing. */
router.get('/galleries', function(req, res, next) {
    res.json({
        items : [
            {
                title : "Weddings",
                image : "images/image1.jpg",
                hash : "weddings"
            },
            {
                title : "Safari",
                image : "images/image1.jpg",
                hash : "safari"
            },
            {
                title : "Celebrites",
                image : "images/image1.jpg",
                hash : "celebrities"
            }
        ]
    });
});

module.exports = router;