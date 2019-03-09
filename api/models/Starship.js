/**
 * Starship.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    starshipName: {
      type: 'string',
      required: true,
      unique: true,
    },
    model: {
      type: 'string',
      required: true,
    },
    passengers: {
      type: 'number',
      required: true,
    },
    pilot: {
      type: 'string',
      defaultsTo: '',
    },
  },
};
