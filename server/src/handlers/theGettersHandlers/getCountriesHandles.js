getCountriesHandlerAll = (req, res) => {
  res
    .status(200)
    .send("Llegue al endpoin get / MODULARIZADO 1 que traerá todos los paises");
};
getCountriesHandlerById = (req, res) => {
  res
    .status(200)
    .send(
      "Llegue al endpoin /countries de id MODULARIZADO 3 con id y esto es lo que se envio"
    );
};

module.exports = { getCountriesHandlerAll, getCountriesHandlerById };
