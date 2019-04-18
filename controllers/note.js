// communicate with note model

// is there an index.js file in this folder?
const db = require('../models');

module.exports = {

    find: (req, res) => {
        // the headline id the user is selecting on the front end
        db.Note.find({
            _headlineId: req.params.id
        }).then(function (dbNote) {
            res.json(dbNote)
        });
    },

    create: (req, res) => {
        db.Note.create(req.body).then(function (dbNote) {
            res.json(dbNote)
        });
    },

    delete: (req, res) => {
        db.Note.delete({
            _id: req.params.id
        }).then(function (dbNote) {
            res.json(dbNote)
        });
    }

}