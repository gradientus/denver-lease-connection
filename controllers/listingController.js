const db = require("../models/listing");

module.exports = {

    //find all the listings
    findAll: function (req, res) {
        db
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //find a listing by it's id
    findById: function (req, res) {
        db
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //create a new listing
    create: function (req, res) {
        //console.log("Create: " + req.body);
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        // console.log('hit create: ' + JSON.stringify(req.body))
    },
    //edit/update a Listing
    update: function (req, res) {
        db
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    //remove/delete a Listing
    // remove: function (req, res) {
    //     db.Listing
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }

};