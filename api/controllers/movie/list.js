/**
 * Module dependencies
 */

// ...

/**
 * movie/list.js
 *
 * List movie.
 */
module.exports = async function list(req, res) {
  try {
    //  Traer todas las peliculas en formato json (Content-Type: application/json)
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
