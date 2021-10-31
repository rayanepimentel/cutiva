
var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    
    typeAgriculture: {
      type: String
    },

    description: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    photoPerfil: {
      type: String
    },

    contact: {
      whatsapp: {
        type: String
      },
      facebook: {
        type: String
      },
      instagram: {
        type: String
      },
      site: {
        type: String
      },
      email: {
        type: String
      }
    },

    localization: {
      zip: {
        type: Number
      },
      numberZip: {
        type: Number
      }
    },

    imGProd: {
      type: String
    }
  });

  return mongoose.model('Tutorial', schema);
};