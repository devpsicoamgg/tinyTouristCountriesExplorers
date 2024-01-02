const {
  editActivity,
} = require("../../controllers/thePutController/activitiesPutController");

const handleEditActivity = async (req, res) => {
  // traigo lo que se necesita id de act y body de lo que se actualiza
  const { id } = req.params;
  const dataToUpdate = req.body;

  try {
    // espero por la respuesta de enviar el id de la act y el body
    const result = await editActivity(id, dataToUpdate);

    // si todo ok, un 200
    res.status(200).json({ message: "Activity updated successfully", result });
  } catch (error) {
    // manejo de err interno
    console.error("Error in the activity edit handler:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleEditActivity };
