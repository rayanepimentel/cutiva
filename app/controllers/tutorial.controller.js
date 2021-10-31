const db = require("../models");
const Cultiva = db.tutorials;

// Create and Save a new Cultiva
exports.create = (req, res) => {
  console.log(res.body)
  // Validate request
  Cultiva.create({
    title: req.body.title,
    description: req.body.description

  })
    .then(function (agricultor) {

      callback(agricultor._id);

    }, function () {

      callback(null);

    });
};


// Retrieve all Cultiva from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Cultiva.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cultivas."
      });
    });
};

// Find a single Cultiva with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cultiva.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Cultiva with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Cultiva with id=" + id });
    });
};

// Update a Cultiva by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Cultiva.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Cultiva with id=${id}. Maybe Cultiva was not found!`
        });
      } else res.send({ message: "Cultiva was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cultiva with id=" + id
      });
    });
};

// Delete a Cultiva with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cultiva.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Cultiva with id=${id}. Maybe Cultiva was not found!`
        });
      } else {
        res.send({
          message: "Cultiva was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Cultiva with id=" + id
      });
    });
};

// Delete all Cultiva from the database.
exports.deleteAll = (req, res) => {
  Cultiva.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Cultivas were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Cultivas."
      });
    });
};

// Find all published Cultivas
exports.findAllPublished = (req, res) => {
  Cultiva.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cultivas."
      });
    });
};
