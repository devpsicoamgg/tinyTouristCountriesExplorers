const { Activity } = require("../../db.js");

const editActivity = async (req, res) => {
  // extrae el id y updatedData por el req
  const { id } = req.params;
  const updatedData = req.body;

  try {
    // actualiza buscando por el id.
    const actUpdated = await Activity.update(updatedData, { where: { id } });

    // verifica si en el arr de acti cambió = actualizó
    if (!actUpdated) {
      // si no encuentra err
      return res.status(404).json({ error: "Activity not found" });
    }

    // felicita por una actualiza exitosa
    res.json({ message: "Activity updated successfully" });
  } catch (error) {
    // maneja err y dice que err en el controller que es el que maneja la logica con la bd
    res.status(500).json({ error: "Looks like an Internal Server Error" });
  }
};

module.exports = { editActivity };
