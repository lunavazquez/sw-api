/**
 * Module dependencies
 */

// ...

/**
 * starship/edit.js
 *
 * Edit starship.
 */
// Crear controlador para editar nave
module.exports = async function edit(req, res) {
  // Evaluar codigo y controlar el error
  try {
    // console.log(req.body);
    // console.log(req.params.starshipId);
    //  Se destructura la llave starship que se encuentra dentro del objeto parms
    const { starshipId } = req.params;
    //  Editar una nave
    const starship = await Starship.updateOne({ starshipId }).set(req.body);
    return res.status(200).json(starship);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
