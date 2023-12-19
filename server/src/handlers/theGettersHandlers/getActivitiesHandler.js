const getActivitiesHandlerAll = (req, res) => {
  res
    .status(200)
    .send(
      "Llegue al endpoin get /activities para obtener todas las activities pero modularizado"
    );
};
module.exports = {
  getActivitiesHandlerAll,
};
