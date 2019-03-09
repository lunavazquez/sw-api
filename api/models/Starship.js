/**
 * Starship.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    starshipId: {
      type: 'string',
      required: true,
      unique: true,
    },
    starshipName: {
      type: 'string',
      required: true,
    },
    model: {
      type: 'string',
      required: true,
    },
    passengers: {
      type: 'string',
      defaultsTo: '',
    },
    episodeId: {
      type: 'string',
      required: true,
    },
    pilot: {
      type: 'string',
      defaultsTo: '',
    },
  },
};
