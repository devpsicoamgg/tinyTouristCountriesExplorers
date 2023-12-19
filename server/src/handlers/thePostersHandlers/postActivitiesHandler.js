

postActivitiesHandler = (req, res)=> {
  res.status(200).send('Llegue al endpoin /post de activities que posteará todas las activities pero MODULARIZADO');
}


module.exports = {postActivitiesHandler};

/* 
Se exporta no la f() sino el objeto por medio de { }
*/