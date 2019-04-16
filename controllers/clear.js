var db = require("../models");

module.exports = {
    emptyDB: function (req, res) {
        db.Headline.remove({}).then(function () {
            return db.Note.remove({})
        }).then(function () {
            res.json({
                message: "removed all",
                ok: true
            });
        });
    }
};