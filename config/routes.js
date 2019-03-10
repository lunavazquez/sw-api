/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  Metodos de  peticion http
  //  Read
  'GET /swapi/starship/list/:episodeId': 'starship/list',
  'GET /swapi/movie/list': 'movie/list',
  //  Edit
  'PUT /swapi/starship/edit/:starshipId': 'starship/edit',
};
