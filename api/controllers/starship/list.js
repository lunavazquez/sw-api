/**
 * Module dependencies
 */

// ...

/**
 * starship/list.js
 *
 * List starship.
 */
module.exports = async function list(req, res) {
  try {
    // console.log(req.params);
    // Requiero la llave episodeId de req.params
    const { episodeId } = req.params;
    //  Buscar en el modelo Starship por el parametro episodeId
    const starships = await Starship.find({ episodeId });
    // Regresa la respuesta con status 200 en formato json
    return res.status(200).json(starships);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error });
  }
};
