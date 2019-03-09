/**
 * Movie.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    movieName: {
      type: 'string',
      required: true,
    },
    poster: {
      type: 'string',
      defaultsTo: '',
    },
    episode: {
      type: 'string',
      required: true,
      unique: true,
    },
  },
};
