/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
// Importar librerias
const fetch = require('node-fetch');
const hash = require('object-hash');

module.exports.bootstrap = async function() {
  //  Se evalua que existan peliculas en la DB
  const countMovies = await Movie.count();
  if (!countMovies) {
    // Obtener listado de movies

    const movies = await fetch('https://swapi.co/api/films/').then(response => response.json());
    for (let movie of movies.results) {
      // Guardar movie en db con el metodo encuentra o crea
      await Movie.findOrCreate(
        {
          episode: movie.episode_id,
        },
        {
          movieName: movie.title,
          episode: movie.episode_id,
        },
      );
      for (let starshipUrl of movie.starships) {
        const starship = await fetch(starshipUrl).then(response => response.json());
        const starshipId = hash(starship.name + movie.episode_id);
        await Starship.findOrCreate(
          { starshipId },
          {
            starshipId,
            episodeId: movie.episode_id,
            starshipName: starship.name,
            model: starship.model,
            passengers: starship.passengers,
          },
        );
      }
    }
  }
};
