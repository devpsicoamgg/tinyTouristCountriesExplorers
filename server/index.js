/*
INICIALIZA EL SERVIDOR. 
Se requiere y levanta la app 
se declara el puerto de escucha activa por el listen. 
Le traje el dotenv con un PORT_SERVER. 
La comunicación entre server y db se da por el sync
*/

require("dotenv").config();

// const axios = require("axios");
const server = require("./src/serverTinyTourist.js");
const { tinyConnection } = require('./src/db.js');
const { PORT_SERVER } = process.env

//este connection viene como obj que su key es connection y su valor toda la instancia de sequelize
tinyConnection.sync({ force: true }).then(() => {
server.listen(PORT_SERVER, () => {
  console.log(`Server is listening in the tinyPort |-> ${PORT_SERVER} <-|`);
})
}).catch(error => console.error(error))


/*
  El server se declara el puerto para mantener la via 
  de comunicación con el back lo hice con el dot.env 
  para permitir la via de comuncicación. 
  por medio de listeng de express 2 args, el puerto de canal
  via de acceso y 2° arg un cb, no obligatorio, pero 
  lo ponemos para ver y saber si hay fallas. 
  Yo lo modifiqué. 
  */
