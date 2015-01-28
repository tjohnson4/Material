var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/menu', function(req, res, next) {
    res.json({
        items : [
            {
                label : "Account",
                icon : "account-box",
                hash : "account"
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

module.exports = router;