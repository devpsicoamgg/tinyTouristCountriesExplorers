const { deleteActivityController } = require("../../controllers/theDeleteController/activitiesDeleteController");

const handleDeleteActivity = async (req, res) => {
  const { id } = req.params;

  try {
    // Llama la f() deleteActivityController con el id del req 
    const deletedActivity = await deleteActivityController(id);
    res.status(200).json({ message: "Activity deleted successfully", activity: deletedActivity });
  } catch (error) {
    console.error("Error in the activity delete handler:", error);
    //si err xq no existe
    if (error.message === "Activity not found") {
      res.status(404).json({ error: "Activity not found" });
    } else {
      //si err x interno
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = { handleDeleteActivity };
