const db = require("../models/listing");

module.exports = {
    findAll: function (req, res) {
        db.Listing
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(db.Model))
            .catch(err => res.status(422).json(err));
    }

}