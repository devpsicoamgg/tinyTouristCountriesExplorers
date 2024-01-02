const { Activity } = require("../../db.js");

const deleteActivityController = async (req, res) => {
  // saca el id de los parámetros de la solicitud
  const { id } = req.params;

  try {
    // Busca la actividad por id y lo destruye por el metodo de sequielize
    const deletedRowsCount = await Activity.destroy({ where: { id } });

    // Verifica si se eliminaron filas (si la actividad existía)
    if (deletedRowsCount === 0) {
      return res.status(404).json({ error: "Activity not found" });
    }

    // Envía una respuesta exitosa
    res.json({ message: "Well, the activity was deleted successfully" });
  } catch (error) {
    // Maneja errores y envía un mensaje genérico en caso de error interno del servidor
    res.status(500).json({ error: "Looks like an Internal Server Error" });
  }
};

module.exports = { deleteActivityController };
