postActivitiesHandler = (req, res) => {
  const { id, name, difficulty, duration, season, description } = req.body;
  res
    .status(200)
    .send(
      `Activitie creada con el id No ${id} y name ${name} y una dificultad ${difficulty}. 
      Además de duración ${duration} en la temporada ${season} y la descripción es:  
      ${description} `
    );
};

module.exports = { postActivitiesHandler };

/* 
Se exporta no la f() sino el objeto por medio de { }
Este recibe inf por body... 
SE HUBO DE CAMBIAR EL ORDEN DE SERVER. 
SE ENVIA INF POR BODY EN JSON. 
*/
