// Cargar las variables de entorno
require('dotenv').config();

// Importar el módulo pg
const { Pool } = require('pg');

// Configuración de la conexión
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// Manejo de errores en el pool
pool.on('error', (err, client) => {
  console.error('Error inesperado en el cliente de la base de datos:', err);
  process.exit(-1);
});

// Exportar la instancia del pool para ser utilizada en otros módulos
module.exports = pool;